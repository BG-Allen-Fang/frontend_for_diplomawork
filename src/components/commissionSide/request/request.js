import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MUIDataTable from "mui-datatables";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const columns = [
    {
        name: "Profile",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <Button onClick={() => window.alert(`User accepted with id = ${dataIndex+1}`)} >
                        <VisibilityIcon></VisibilityIcon>
                    </Button>
                );
            }
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "degree",
        label: "Degree",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "title",
        label: "Title",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "vacancy",
        label: "Vacancy",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Accept",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <IconButton variant="contained" color="success"
                            onClick={() => window.alert(`User accepted with id = ${dataIndex+1}`)}>
                        <CheckIcon></CheckIcon>
                    </IconButton>
                );
            }
        }
    },
    {
        name: "Decline",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <IconButton color="error"
                            onClick={() => window.alert(`User declined with id = ${dataIndex+1}`)}>
                        <ClearIcon></ClearIcon>
                    </IconButton>
                );
            }
        }
    }
];

const data = [
    { name: "Aniyar Kaliyev", degree: "Bachelor", title: "Teacher", vacancy: "Senior lecturer" },
    { name: "Alen Tyakbayev", degree: "Master", title: "Senior lecturer", vacancy: "Senior lecturer" },
    { name: "Yerassyl Bolat", degree: "PhD", title: "Associated professor", vacancy: "Professor" },
    { name: "Aibyn Sagyndyk", degree: "PhD", title: "Senior lecturer", vacancy: "Associated professor" },
];

const options = {
    selectableRows: "none",
};

const Request = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" >
                <MUIDataTable
                    title={"Requests List"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </Container>
        </ThemeProvider>
    );
}

export default Request;