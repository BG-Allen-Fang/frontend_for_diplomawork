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
import {NavLink, Redirect} from "react-router-dom";
import Form from "react-validation/build/form";
import {pin_code, register, userActivation} from "../../../actions/auth";


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

    const [values, setValues] = React.useState({
        name: '',
        lastName: '',
        patronymic: '',
        password: '',
        phone_number: '',
        email: '',
        pin_code: '',

        successful: false,
        successful2: false,
        showPassword: false,
        dialogPinOpen: false,
    });

    const userActivate = () => {
        props.dispatch(
            userActivation(
                values.email,
                values.pin_code,
            )
        ).then(() => {
            setValues({
                ...values,
                successful2: true,
            });
        })
    }

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleChangePin = (prop) => (event) => {
        setValues({...values, [prop]: event});
    };
    const handleClickOpen = () => {
        props.dispatch(
            register(values.name, values.lastName,
                values.patronymic, values.phone_number,
                values.email, values.password
            )
        ).then(() => {
            setValues({...values, successful: true,});
            setValues({...values, dialogPinOpen: true,});
        }).then(() => {
            props.dispatch(pin_code(values.email))
        }).catch(() => {
            setValues({...values, successful: false,});
        });
    };
    const handleClose = () => {
        setValues({...values, dialogPinOpen: false,});
    }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    if (values.successful2) {
        return <Redirect to="/signin"/>;
    }

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
                    <Box component={Form} noValidate sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    value={values.name}
                                    onChange={handleChange('name')}
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Fist Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    value={values.lastName}
                                    onChange={handleChange('lastName')}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    value={values.patronymic}
                                    onChange={handleChange('patronymic')}
                                    id="patronymic"
                                    label="Patronymic"
                                    name="patronymic"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth required variant="outlined">
                                    <InputLabel htmlFor="phone_number">Phone number</InputLabel>
                                    <OutlinedInput
                                        id="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange('phone_number')}
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
                                    value={values.email}
                                    onChange={handleChange('email')}
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
                                    validate={"0123456789"}
                                    value={values.pin_code}
                                    onChange={handleChangePin('pin_code')}
                                    length={4}
                                    secret
                                    className="pin-field"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleClose()}>Cancel</Button>
                                <Button onClick={() => userActivate()}>Send</Button>
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