import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {AppBar, makeStyles, ThemeProvider, Toolbar} from "@mui/material";
import logo from './logo.png';
import "./App.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});


function Home(){
    return (
        <ThemeProvider theme={theme}>
            <AppBar position={"fixed"}>
                <Container fixed>
                    <Toolbar>
                        <a href="/">
                            <img src={logo} alt="Logo" className="barlogo"/>
                        </a>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" href="signin" endIcon={<AccountCircleIcon />}>Log in</Button>
                        </Box>
                        <Box>
                            <Button color="secondary" variant="contained" href="signup"endIcon={<PersonAddAltIcon />}>Sign up</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Home;

