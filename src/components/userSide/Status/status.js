import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {ThemeProvider} from '@mui/material/styles';
import "./status.css"
import Card from "@mui/material/Card";
import {createTheme, Divider, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import * as PropTypes from "prop-types";
import ReactDOM from "react-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

let stage = "stage1";

const Stage1 = () => {
    return (
        <CardContent>
            <h2>Submission of stage1</h2>
            <p>Start date: <span className="date">22.04.2022</span> Finish date: <span
                className="date">06.05.22</span></p>
            <p><span className="bold">Description:</span> Сonsideration of applications of candidates
                for vacancies</p>
            <p><span className="bold">Needed:</span> to choose vacancy, and fill a blank with submitting
                documents </p>
        </CardContent>
    )
}
const Stage2 = () => {
    return (
        <CardContent>
            <h2>Submission of stage2</h2>
            <p>Start date: <span className="date">22.04.2022</span> Finish date: <span
                className="date">06.05.22</span></p>
            <p><span className="bold">Description:</span> Сonsideration of applications of candidates
                for vacancies</p>
            <p><span className="bold">Needed:</span> to choose vacancy, and fill a blank with submitting
                documents </p>
        </CardContent>
    )
}
const Stage3 = () => {
    return (
        <CardContent>
            <h2>Submission of stage3</h2>
            <p>Start date: <span className="date">22.04.2022</span> Finish date: <span
                className="date">06.05.22</span></p>
            <p><span className="bold">Description:</span> Сonsideration of applications of candidates
                for vacancies</p>
            <p><span className="bold">Needed:</span> to choose vacancy, and fill a blank with submitting
                documents </p>
        </CardContent>
    )
}

function ChangeState(e) {
    stage = e.target.value;
    StageContent(stage);
}



const StageContent = (props) => {
    switch (props) {
        case "stage1":
            return ReactDOM.render( <Stage1/>,document.getElementById('StageContent') );
        case "stage2":
            return ReactDOM.render( <Stage2/>,document.getElementById('StageContent') );
        case "stage3":
            return ReactDOM.render( <Stage3/>,document.getElementById('StageContent') );
        default:
            return ReactDOM.render( <Stage1/>,document.getElementById('StageContent') );
    }
}

function LoadingButton() {
    return null;
}

LoadingButton.propTypes = {
    loading: PropTypes.bool,
    variant: PropTypes.string,
    startIcon: PropTypes.element,
    loadingPosition: PropTypes.string,
    children: PropTypes.node
};
const Status = () => {

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
                                <Button onClick={ChangeState} value={"stage1"}
                                        variant="text" className="btn-stage"
                                        endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 1</Button>

                                <Divider orientation="vertical" flexItem/>
                                <Button onClick={ChangeState} value={"stage2"}
                                        className="btn-stage" variant="text"
                                        endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 2</Button>

                                <Divider orientation="vertical" flexItem/>
                                <Button onClick={ChangeState} value={"stage3"}
                                        className="btn-stage" variant="text"
                                        endIcon={<ArrowForwardIosIcon/>}
                                        size="large">Stage 3</Button>
                            </Stack>
                        </CardContent>
                        <Divider/>

                        <CardContent>
                            <div id={"StageContent"} />
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Status;