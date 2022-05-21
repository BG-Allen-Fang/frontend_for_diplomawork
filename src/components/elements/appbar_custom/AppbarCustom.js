import * as React from 'react';
import Button from '@mui/material/Button';
import {AppBar, CssBaseline, Slide, ThemeProvider, Toolbar, useScrollTrigger} from "@mui/material";
import logo from '../../../images/logo.png';
import "./AppbarCustom.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});


function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const AppbarCustom = (props) => {
    return (
        <React.Fragment>
            <CssBaseline/>

            <ThemeProvider theme={theme}>
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar>
                            <Link sx={{ml: 5}} to="/">
                                <img src={logo} alt="Logo" className="barlogo"/>
                            </Link>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            </Typography>
                            {props.user ? (
                                <div>

                                    <Button sx={{mr: 3}} color="inherit" variant="outlined" component={Link}
                                            to="/profile">{props.user.name} profile</Button>
                                    <Button sx={{mr: 5}} color="secondary" onClick={props.logOut} variant="contained" component={Link}
                                            to="/signin">Log Out</Button>
                                </div>
                            ) : (
                                <div>
                                    <Button sx={{mr: 3}} color="inherit" variant="outlined" component={Link}
                                            to="/signin"
                                            endIcon={<AccountCircleIcon/>}>Log in</Button>
                                    <Button sx={{mr: 5}} color="secondary" variant="contained" component={Link}
                                            to="/signup"
                                            endIcon={<PersonAddAltIcon/>}>Sign up</Button>
                                </div>

                            )}
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar sx={{marginBottom: 4.5}}/>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default AppbarCustom;

