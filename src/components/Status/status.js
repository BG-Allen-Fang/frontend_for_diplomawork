import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import "./status.css"
import Card from "@mui/material/Card";
import {CardHeader, createTheme, Divider, Stack, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import * as PropTypes from "prop-types";
import { IconName } from "react-icons/fc";
import CancelIcon from '@mui/icons-material/Cancel';

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});


function LoadingButton(props) {
    return null;
}

LoadingButton.propTypes = {
    loading: PropTypes.bool,
    variant: PropTypes.string,
    startIcon: PropTypes.element,
    loadingPosition: PropTypes.string,
    children: PropTypes.node
};
const Status = (props) => {
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
                    <Card className="main-card" sx={{width: 690}}>
                        <CardContent>
                            <Stack spacing={7} direction="row" marginLeft="50px">
                                <Button variant="text" className="btn-stage" endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 1</Button>
                                <Divider orientation="vertical" flexItem/>
                                <Button className="btn-stage" variant="text" endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 2</Button>
                                <Divider orientation="vertical" flexItem/>
                                <Button className="btn-stage" variant="text" endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 3</Button>
                            </Stack>
                        </CardContent>
                        <Divider/>
                        <CardContent>
                            <h2>Submission of documents</h2>
                            <p>Start date: <span className="date">22.04.2022</span> Finish date: <span className="date">06.05.22</span></p>
                            <p><span className="bold">Description:</span> Сonsideration of applications of candidates for vacancies</p>
                            <p><span className="bold">Needed:</span> to choose vacancy, and fill a blank with submitting documents </p>

                        </CardContent>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Status;