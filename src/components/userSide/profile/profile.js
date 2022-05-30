import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import {createTheme, Paper, Step, StepLabel, Stepper,} from "@mui/material";
import Typography from "@mui/material/Typography";
import UserProfessionalInfo from './UserProfessionalInfo';
import UserDocument from './UserDocument';
import Articles from './Article';
import Certificates from './Certificate';
import Development from './Development';
import IntelligenceLegalDocument from './IntelligenceLegalDocument';
import Projects from './Project';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {getRequestById} from "../../../actions/profile";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

let Profile = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [disable, setDisable] = React.useState(false);
    let handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getRequestById(props.user.id)).then(setDisable(true))
    },[])

    const steps = ['Professional Info', 'Documentation', 'Articles',
        'Certificates', 'Development', 'IntelligenceLegalDocument', 'Projects'];
    let getStepContent = (step) =>
    {
        switch (step) {
            case 0:
                return <UserProfessionalInfo handleNext={handleNext} isDisable={disable}/>;
            case 1:
                return <UserDocument handleNext={handleNext} isDisable={disable}/>;
            case 2:
                return <Articles handleNext={handleNext} isDisable={disable}/>;
            case 3:
                return <Certificates handleNext={handleNext} isDisable={disable}/>;
            case 4:
                return <Development handleNext={handleNext} isDisable={disable}/>;
            case 5:
                return <IntelligenceLegalDocument handleNext={handleNext} isDisable={disable}/>;
            case 6:
                return <Projects handleNext={handleNext} />;
            default:
                throw new Error('Unknown step');
        }
    }

    const { isLoggedIn } = props;
    if (!isLoggedIn) {
        return <Redirect to="/signin" />;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" maxWidth="sm" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                    <Typography component="h1" variant="h4" align="center">
                        Profile
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label < 4}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your request.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your request is applied.
                                    If your status changes you will be notified,
                                    also you can check your status in status page.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    {/*{activeStep !== 0 && (*/}
                                    {/*    <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>*/}
                                    {/*        Back*/}
                                    {/*    </Button>*/}
                                    {/*)}*/}

                                    {/*<Button*/}
                                    {/*    variant="contained"*/}
                                    {/*    onClick={handleNext}*/}
                                    {/*    sx={{mt: 3, ml: 1}}*/}
                                    {/*>*/}
                                    {/*    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}*/}
                                    {/*</Button>*/}
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

function mapStateToProps(state) {
    const { isLoggedIn, user } = state.auth;
    return {
        isLoggedIn,
        user,
    };
}

let UserProfileComponent = withRouter(Profile);

export default connect(mapStateToProps)(UserProfileComponent)