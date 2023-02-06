import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';


import NewReportLocation from '../NewReportLocation/NewReportLocation';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import IssueFormView from '../IssueFormView/IssueFormView';






const steps = [
    {
        label: 'Add Reported Location',
    },
    {
        label: 'Choose Category',

    },
    {
        label: 'Submit Report Form',
    },
];



export default function CreateReportPage() {
  const dispatch = useDispatch();  

  const [activeStep, setActiveStep] = React.useState(0);

  const categories = useSelector(store => store.subcategories)

  const [newReport, setNewReport] = React.useState({
    imageUrl: '',
    description: '',
    category: '',
    category_id: '',
    anonymous: false,
    subcategory_id: null,
    latitude: '',
    longitude: '',
  })

  // state variables to handle form inputs before packaging to send off
  const [anon, setAnon] = React.useState(newReport.anonymous)
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [subcategoryId, setSubcatecoryId] = React.useState('');
  

  React.useEffect(() => {
    console.log(newReport);
  }, [newReport])

  React.useEffect(() => {
    dispatch({type: "FETCH_SUBCATEGORIES"})
  }, [])



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    
    const handleSubmit = () => {
        setNewReport({...newReport, 
            anonymous: anon,})
        console.log('this will submit the ticket');
        dispatch({type: "POST_TICKET", payload: newReport});
    }

  const getStepContent = index => {
    switch (index) {
        case 0:
            return (
                <NewReportLocation
                    newReport={newReport}
                    setNewReport={setNewReport}/>
            )
        case 1:
            return (
                <CategoryDropdown
                    categories={categories}
                    newReport={newReport}
                    setNewReport={setNewReport}/>
            )
        case 2:
            return (
                <IssueFormView
                    newReport={newReport}
                    setNewReport={setNewReport}
                    anon={anon}
                    setAnon={setAnon}
                    categories={categories}
                    />

            )
    
    }
}  

    return (
        <CssBaseline>
            <Box sx={{ maxWidth: 1000, ml: "7%" }}>
                <Typography variant='h5'>Create New Report</Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Box sx={{ mb: 2 }}>
                                    {getStepContent(index)}
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 2, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 2, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Submit Report!</Typography>
                        <Button
                            variant='contained'
                            onClick={handleSubmit}
                            sx={{ mt: 1, mr: 1 }}
                        >Submit!</Button>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 2 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
        </CssBaseline>
    );
}