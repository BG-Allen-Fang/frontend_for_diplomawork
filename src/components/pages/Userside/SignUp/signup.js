import * as React from 'react';
import {IMaskInput} from "react-imask";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import PropTypes from "prop-types";
import ReactPinField from "react-pin-field";
import "./SingUp.css";
import {NavLink} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const phone_number = React.forwardRef(function TextMaskCustom(props, ref) {
    const {onChange, ...other} = props;
    return (
        <IMaskInput
            {...other}
            mask="+# (#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({target: {name: props.name, value}})}
            overwrite
        />
    );
});

phone_number.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const SignUp = (props) => {

    // Constants

    const newFirstNameText = props.signUpPage.newFirstNameText;


    // Functions

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        phone_number: '',
        dialogPinOpen:false,
    });

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const handleClickOpen = () => {
        setValues({
            ...values,
            dialogPinOpen: true,
        });
    };

    const handleClose = () => {
        setValues({
            ...values,
            dialogPinOpen: false,
        });
    };

    const onFirstNameTextChange = (e) => {
        let text = e.target.value;
        props.onFirstNameTextChange(text);
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    value={newFirstNameText}
                                    onChange={onFirstNameTextChange}
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="Patronymic"
                                    label="Patronymic"
                                    name="Patronymic"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required variant="outlined">
                                    <InputLabel htmlFor="phone_number">Phone number</InputLabel>
                                    <OutlinedInput
                                        id="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange}
                                        name="phone_number"
                                        placeholder="+7 (100) 000-0000"
                                        label="Phone number"
                                        inputComponent={phone_number}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={() => handleClickOpen()}
                        >
                            Sign Up
                        </Button>
                        <Dialog open={values.dialogPinOpen} onClose={() => handleClose()}>
                            <DialogTitle>Enter PIN</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    We have sent you a pin code by email. Please check your email and enter the PIN code
                                    sent to you.
                                </DialogContentText>
                                <ReactPinField
                                    length={4}
                                    secret
                                    className="pin-field"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleClose()}>Cancel</Button>
                                <Button onClick={() => handleClose()}>Send</Button>
                            </DialogActions>
                        </Dialog>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/signin" variant="body2">
                                    Already have an account? Sign in
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;