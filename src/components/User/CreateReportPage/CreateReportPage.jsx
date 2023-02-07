import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Nav from '../NavMenu/NavMenu';
import Header from '../Header/Header';
import CategoryView from './CategoryView';
import NewReportLocation from './NewReportLocation/NewReportLocation';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import IssueFormView from './IssueFormView';
import { Dialog } from '@mui/material';
import ConfirmationView from './ConfirmationView';


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

    const [open, setOpen] = React.useState(false);

    const [activeStep, setActiveStep] = React.useState(0);

    const subcategories = useSelector(store => store.subcategories)

    const [newReport, setNewReport] = React.useState({
        imageUrl: '',
        description: '',
        category: '',
        category_id: '',
        anonymous: false,
        subcategory_id: null,
        latitude: null,
        longitude: null,
    })

  // state variables to handle form inputs before packaging to send off
  const [anon, setAnon] = React.useState(newReport.anonymous)
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [subcategoryId, setSubcategoryId] = React.useState('');


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
        setOpen(true);
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
                <CategoryView
                    category={category}
                    setCategory={setCategory}
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
                    subcategories={subcategories}
                    category={category}
                    setCategory={setCategory}
                    />

            )
    
    }
}  


    return (
        <div>
            <Header/>
            <Box sx={{ maxWidth: 390, maxHeight: 600, ml: "7%", mr: "7%", mt: 2, textAlign: 'center' }}>
                <Typography 
                    variant='h5'
                    sx={{
                        backgroundColor: "#FFBC00",
                    }}
                >
                    Create New Report
                </Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Box sx={{ mb: 2 }}>
                                    {getStepContent(index)}
                                    <div>
                                        {index === steps.length - 1 ? 
                                            <div>
                                                <Button
                                                    onClick={handleReset}
                                                    sx={{ mt: 2, mr: 1 }}
                                                >Reset
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleSubmit}
                                                    sx={{ mt: 2, mr: 1 }}
                                                >Submit
                                                </Button>
                                            </div>
                                        :   
                                            <div>
                                                <Button
                                                onClick={handleBack}
                                                sx={{ mt: 2, mr: 1 }}
                                                >
                                                {index === 0 ? null : 'Back'}
                                                </Button>
                                                <Button
                                                    disabled={!newReport.latitude}
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    sx={{ mt: 2, mr: 1 }}
                                                >
                                                {index === 0 ? 'Confirm Issue Location' : 'Next'}
                                                </Button>
                                            </div>
                                        }
                                        <Dialog
                                            fullScreen
                                            open={open}
                                        >
                                            <ConfirmationView />
                                        </Dialog>
                                        {/* <Button
                                            disabled={index === 0}
                                            onClick={index === steps.length - 1 ? {handleReset} : {handleBack}}
                                            sx={{ mt: 2, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Reset' : 'Back'}
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={index === steps.length - 1 ? {handleSubmit} : {handleNext}}
                                            sx={{ mt: 2, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Submit' : 'Continue'}
                                        </Button> */}
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        {/* <Typography>Submit Report!</Typography>
                        <Button onClick={handleReset} sx={{ mt: 2, mr: 2 }}>
                            Reset
                        </Button>
                        <Button
                            variant='contained'
                            onClick={handleSubmit}
                            sx={{ mt: 1, mr: 1 }}
                        >Submit</Button> */}
                    </Paper>
                )}
            </Box>
            <Nav/>
        </div>
    );
}