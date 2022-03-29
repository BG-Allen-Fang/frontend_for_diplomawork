import * as React from 'react';
import Button from '@mui/material/Button';
import {AppBar, ThemeProvider, Toolbar} from "@mui/material";
import logo from './logo.png';
import "./App.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {createTheme} from "@mui/material/styles";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});


function AppbarCustom(){
    return (
        <ThemeProvider theme={theme}>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <Link sx={{ ml: 5 }} href="/">
                        <img src={logo} alt="Logo" className="barlogo"/>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button sx={{ mr: 3}} color="inherit" variant="outlined" href="signin" endIcon={<AccountCircleIcon />}>Log in</Button>
                    <Button sx={{ mr: 5}} color="secondary" variant="contained" href="signup" endIcon={<PersonAddAltIcon />}>Sign up</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default AppbarCustom;

