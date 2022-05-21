import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import microsoft from '../../../images/microsoftteam.png';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './meeting.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#192F59',
        },
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

    const Meeting = (props) => {
        const [personName, setPersonName] = React.useState([]);

        const handleChange = (event) => {
            const {
                target: {value},
            } = event;
            setPersonName(
                typeof value === 'string' ? value.split(',') : value,
            );
        };

        return (
            <ThemeProvider theme={theme}>
                <div className="meeting">
                    <br/><br/>
                    <Container className="con" maxWidth="lg">
                        <br/><br/>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <div className="App">
                                    <br/><br/><br/>
                                    <img src={microsoft} height={200} width={200}/>
                                    <br/><br/><br/><br/>
                                    <Button variant="contained" color="primary">Create Meeting</Button>
                                    <br/><br/><br/><br/>
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <div>
                                    <br/><br/><br/>
                                    <TextField sx={{ width: 450}}
                                        label="Subject"
                                        size="small"
                                    /><br/><br/>

                                    <TextField sx={{ width: 450}}
                                        label="Comment"
                                        size="small"
                                    /><br/><br/>

                                    <TextField
                                        id="datetime-local"
                                        label="Start Time"
                                        type="datetime-local"
                                        size="small"
                                        defaultValue="2022-01-01T00:00"
                                        sx={{width: 450}}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    /><br/><br/>

                                    <TextField
                                        id="datetime-local"
                                        label="Finish Date"
                                        type="datetime-local"
                                        defaultValue="2022-01-01T00:00"
                                        size="small"
                                        sx={{width: 450}}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}/><br/><br/>

                                    <FormControl sx={{ width: 450}}>
                                        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput label="Tag"/>}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={personName.indexOf(name) > -1}/>
                                                    <ListItemText primary={name}/>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                        </Grid>

                    </Container>
                    <br/><br/><br/><br/>
                </div>
            </ThemeProvider>
        );
    }

export default Meeting;