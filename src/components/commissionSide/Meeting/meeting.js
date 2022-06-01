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
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {useEffect} from "react";
import {getCommission, meetingCreate} from "../../../actions/commissionSide/meeting";
import moment from "moment";

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

const Meeting = (props) => {
    const [values, setValues] = React.useState({
        subject: "",
        comment: "",
        dateTimeStart: moment().format("YYYY-MM-DDTHH:mm"),
        dateTimeFinish: moment().format("YYYY-MM-DDTHH:mm"),
    });
    const [personName, setPersonName] = React.useState([]);
    const [commission, setCommission] = React.useState([]);

    const handleChange = (event) => {
        const {target: {value},} = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value,)
    };

    const handleChangeText = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    let handleSubmit = () => {
        const {dispatch} = props;
        let requestValues = {
            subject: values.subject,
            comment: values.comment,
            dateTimeStart: values.dateTimeStart,
            dateTimeFinish: values.dateTimeFinish,
            attendees: personName,
        }
        dispatch(meetingCreate(requestValues))
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getCommission()).then((res) => {
            setCommission(res)
        });
    }, [])

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
                                <Button variant="contained" onClick={handleSubmit} color="primary">Create
                                    Meeting</Button>
                                <br/><br/><br/><br/>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <div>
                                <br/><br/><br/>
                                <TextField sx={{width: 450}}
                                           onChange={handleChangeText}
                                           value={values.subject}
                                           name={"subject"}
                                           label="Subject"
                                           size="small"
                                /><br/><br/>

                                <TextField sx={{width: 450}}
                                           onChange={handleChangeText}
                                           value={values.comment}
                                           name={"comment"}
                                           label="Comment"
                                           size="small"
                                /><br/><br/>

                                <TextField
                                    onChange={handleChangeText}
                                    value={values.dateTimeStart}
                                    name={"dateTimeStart"}
                                    label="Start Time"
                                    type="datetime-local"
                                    size="small"
                                    sx={{width: 450}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /><br/><br/>

                                <TextField
                                    onChange={handleChangeText}
                                    value={values.dateTimeFinish}
                                    name={"dateTimeFinish"}
                                    label="Finish Date"
                                    type="datetime-local"
                                    size="small"
                                    sx={{width: 450}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}/><br/><br/>

                                <FormControl sx={{width: 450}}>
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
                                        {commission.map((member) => (
                                            <MenuItem key={member.email} value={member.email}>
                                                <Checkbox checked={personName.indexOf(member.email) > -1}/>
                                                <ListItemText primary={member.email}/>
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

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    return {
        isLoggedIn,
        commission: state.meetingPage.commission,
    };
}

let WrappedMeetingComponent = withRouter(Meeting);

export default connect(mapStateToProps)(WrappedMeetingComponent)