import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const Poll = (props) => {

    return (
        <ThemeProvider theme={theme}>

        </ThemeProvider>
    );
}

export default Poll;