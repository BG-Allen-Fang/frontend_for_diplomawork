import * as React from 'react';
import Button from '@mui/material/Button';
import {AppBar, ThemeProvider, Toolbar} from "@mui/material";
import logo from '../../Images/logo.png';
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

function AppbarCustom() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <Link sx={{ml: 5}} to="/">
                        <img src={logo} alt="Logo" className="barlogo"/>
                    </Link>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    </Typography>
                    <Button sx={{mr: 3}} color="inherit" variant="outlined" component={Link} to="/signin"
                            endIcon={<AccountCircleIcon/>}>Log in</Button>
                    <Button sx={{mr: 5}} color="secondary" variant="contained" component={Link} to="/signup"
                            endIcon={<PersonAddAltIcon/>}>Sign up</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default AppbarCustom;

