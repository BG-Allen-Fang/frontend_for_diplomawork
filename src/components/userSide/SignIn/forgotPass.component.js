import React, {Component} from "react";
import {isEmail} from "validator";
import {connect} from "react-redux";
import {pin_code, userForgotPass} from "../../../actions/auth";
import Form from "react-validation/build/form";
import {Redirect} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const vPin_code = (value) => {
    if (value.length < 4 || value.length > 4) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be 4 characters.
            </div>
        );
    }
};

class ForgotPass extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePin_code = this.onChangePin_code.bind(this);
        this.userForgotPass = this.userForgotPass.bind(this);
        this.createPinCode = this.createPinCode.bind(this);


        this.state = {
            email: "",
            pin_code: "",
            emailSuccessful: false,
            pinSuccessful: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }


    onChangePin_code(e) {
        this.setState({
            pin_code: e.target.value,
        });
    }


    createPinCode(e) {
        e.preventDefault();

        this.props
            .dispatch(
                pin_code(this.state.email)
            ).then(() => {
                this.setState({
                    emailSuccessful: true,
                });
            }
        )
    }

    userForgotPass(e) {
        e.preventDefault();

        this.props
            .dispatch(
                userForgotPass(
                    this.state.email,
                    this.state.pin_code,
                )
            ).then(() => {
                this.setState({
                    pinSuccessful: true
                });
            }
        )
    }


    render() {
        const {message} = this.props;

        if (this.state.pinSuccessful) {
            return <Redirect to="/signin"/>;
        }

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Forgot Password
                        </Typography>
                        <Box component="form">
                            <Form>
                                {!this.state.emailSuccessful && (
                                    <div>
                                        <div>
                                            <p>We send pin code to you're email</p>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    label="Email Address"
                                                    name="email"
                                                    autoComplete="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    validations={[required, email]}
                                                />
                                            </Grid>
                                        </div>
                                        <div>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{mt: 3, mb: 2}}
                                                onClick={this.createPinCode}
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>

                                )}
                                {this.state.emailSuccessful && (
                                    <div>
                                        <div>
                                            <p>Please write your pin code here</p>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    label="Pin-code"
                                                    type="text"
                                                    className="form-control"
                                                    name="pin_code"
                                                    value={this.state.pin_code}
                                                    onChange={this.onChangePin_code}
                                                    validations={[required, vPin_code]}
                                                />
                                            </Grid>
                                        </div>
                                        <div>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{mt: 3, mb: 2}}
                                                onClick={this.userForgotPass}
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>

                                )}

                                {message && (
                                    <div className="form-group">
                                        <div
                                            className={this.state.emailSuccessful ? "alert alert-success" : "alert alert-danger"}
                                            role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </Form>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const {message} = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(ForgotPass);
