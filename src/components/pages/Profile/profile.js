import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider} from '@mui/material/styles';
import "./profile.css"
import {
    createTheme, FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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

    const [text, setText] = React.useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Submit Documents
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl required sx={{ m: 1, minWidth: 380 }}>
                                    <InputLabel id="demo-simple-select-required-label">Vacancy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={text}
                                        label="Vacancy *"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>


                        <Stack spacing={2} direction="row" marginTop="20px" marginLeft="100px">
                            <Button variant="contained" size="large">Save</Button>
                            <Button variant="contained" size="large">Submit</Button>
                        </Stack>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Profile;