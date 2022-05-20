import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import "./profile.css"
import {createTheme, Paper, Step, StepLabel, Stepper,} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserProfessionalInfo from './UserProfessionalInfo';
import UserDocument from './UserDocument';
import Articles from './Article';
import Certificates from './Certificate';
import Development from './Development';
import IntelligenceLegalDocument from './IntelligenceLegalDocument';
import Projects from './Project';

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const Profile = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [text, setText] = React.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };


    const steps = ['Professional Info', 'Documentation', 'Articles',
        'Certificates', 'Development', 'IntelligenceLegalDocument', 'Projects'];

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <UserProfessionalInfo />;
            case 1:
                return <UserDocument />;
            case 2:
                return <Articles />;
            case 3:
                return <Certificates/>;
            case 4:
                return <Development />;
            case 5:
                return <IntelligenceLegalDocument />;
            case 6:
                return <Projects />;
            default:
                throw new Error('Unknown step');
        }
    }

    const theme = createTheme();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Typography component="h1" variant="h4" align="center">
                            Profile
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label<4}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is #2001539. We have emailed your order
                                        confirmation, and will send you an update when your order has
                                        shipped.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}

                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                </Container>
            </ThemeProvider>
    );
}

export default Profile;