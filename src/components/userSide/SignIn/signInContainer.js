import * as React from 'react';
import {connect} from "react-redux";
import {login} from "../../../actions/auth";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {NavLink, Redirect} from "react-router-dom";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import {Component} from "react";
import {withRouter} from "react-router";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class SignInContainer extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailTextChange = this.handleEmailTextChange.bind(this);
        this.handlePasswordTextChange = this.handlePasswordTextChange.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
        };
    }

    handleEmailTextChange(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handlePasswordTextChange(e) {
        this.setState({
            password: e.target.value,
        });
    }


    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.email, this.state.password))
                .then(() => {
                    history.push("/");
                    window.location.reload();
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/" />;
        }

        const theme = createTheme({
            palette: {
                primary: {
                    main: '#192F59',
                },
            },
        });

        const newEmailText = this.state.email;
        const newPasswordText = this.state.password;

        return (
            <ThemeProvider theme={theme}>
                <Container height="100vh" component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            height: '90vh',
                            marginTop: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component={Form} onSubmit={this.handleLogin} ref={(c) => { this.form = c;}} sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={newEmailText}
                                onChange={this.handleEmailTextChange}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                validations={[required]}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={newPasswordText}
                                onChange={this.handlePasswordTextChange}
                                validations={[required]}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary"/>}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button
                                disabled={this.state.loading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}

                            >
                                Sign In
                            </Button>
                            {message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={(c) => {
                                    this.checkBtn = c;
                                }}
                            />
                            <Grid container>
                                <Grid item xs>
                                    <NavLink to={"/forgotPass"} variant="body2">
                                        Forgot password?
                                    </NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

let UrlDataSignInContainer = withRouter(SignInContainer);

export default connect(mapStateToProps)(UrlDataSignInContainer);