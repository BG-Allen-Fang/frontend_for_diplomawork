import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import {NavLink} from "react-router-dom";
import "./profile.css"
import {Avatar, createTheme, IconButton, Menu, MenuItem, Toolbar, Tooltip} from "@mui/material";

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


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Profile;