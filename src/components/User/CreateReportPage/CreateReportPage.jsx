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

const steps = [
    {
        label: 'Add Reported Location',
        description: null,
    },
    {
        label: 'Choose Category',
        description:
            null,
    },
    {
        label: 'Submit Report Form',
        description: null,
    },
];



export default function CreateReportPage() {
    const [activeStep, setActiveStep] = React.useState(0);

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
        console.log('this will submit the ticket');
    }

    const getStepContent = index => {
        switch (index) {
            case 0:
                return (
                    <NewReportLocation />
                )
            case 1:
                return (
                    <Typography>Placeholder for category selection</Typography>
                )
            case 2:
                return (
                    <Typography>Placeholder for Submit form</Typography>
                )

        }
    }

    return (
        <CssBaseline>
            <Box sx={{ maxWidth: 1000, ml: 1 }}>
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
                                <Typography>{step.description}</Typography>
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