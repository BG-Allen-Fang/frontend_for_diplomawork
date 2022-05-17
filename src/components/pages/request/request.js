import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MUIDataTable from "mui-datatables";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
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
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "state",
        label: "State",
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
    { name: "Aniyar Kaliyev", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "Alen Tyakbayev", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Yerassyl Bolat", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "Aibyn Sagyndyk", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Prabhakar Linwood", company: "Example Inc.", city: "Hartford", state: "CT"},
    { name: "Esperanza Susanne",  company: "Example Inc.", city: "Hartford", state: "CT"},
    { name: "Christian Birgitte", company: "Example Inc.", city: "Tampa", state: "FL"},
    { name: "Meral Elias", company: "Example Inc.", city: "Hartford", state: "CT"},
    { name: "Deep Pau", company: "Example Inc.", city: "Yonkers", state: "NY"},
    { name: "Sebastiana Hani", company: "Example Inc.", city: "Dallas", state: "TX"},
    { name: "Marciano Oihana", company: "Example Inc.", city: "Yonkers", state: "NY"},
    { name: "Brigid Ankur", company: "Example Inc.", city: "Dallas", state: "TX"},
    { name: "Anna Siranush", company: "Example Inc.", city: "Yonkers", state:"NY"},
    { name: "Avram Sylva", company: "Example Inc.", city: "Hartford", state: "CT"},
    { name: "Serafima Babatunde", company: "Example Inc.", city: "Tampa", state: "FL"},
    { name: "Gaston Festus", company: "Example Inc.", city: "Tampa", state: "FL"},
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