import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, IconButton, styled} from "@mui/material";
import Button from "@mui/material/Button";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import {intelligenceLegalDocumentsCreate} from "../../../actions/userSide/profile";

const Input = styled('input')({
    display: 'none',
});

let IntelligenceLegalDocuments = (props) => {

    const [intelligenceLegalDocumentsValues, setintelligenceLegalDocumentsValues] = React.useState(
        [{
            file: null,
            name: "",
        }])

    let addFormFields = () => {
        setintelligenceLegalDocumentsValues([
            ...intelligenceLegalDocumentsValues,
            {
                file: null,
                name: "",
            }])
    }

    let handleChange = (i, e) => {
        let newIntelligenceLegalDocumentsValues = [...intelligenceLegalDocumentsValues];
        newIntelligenceLegalDocumentsValues[i][e.target.name] = e.target.value;
        setintelligenceLegalDocumentsValues(newIntelligenceLegalDocumentsValues);
    }


    const handleFileChange = (i, e) => {
        const {dispatch} = props;

        let newIntelligenceLegalDocumentsValues = [...intelligenceLegalDocumentsValues];
        newIntelligenceLegalDocumentsValues[i][e.target.name] = e.target.files[0];
        setintelligenceLegalDocumentsValues(newIntelligenceLegalDocumentsValues);
        debugger

        dispatch(intelligenceLegalDocumentsCreate(
            intelligenceLegalDocumentsValues[i].file.name,
            intelligenceLegalDocumentsValues[i].file
        ))
    };

    const handleNextSubmit = () => {
        props.handleNext();
    };
    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Intelligence Legal Documents
            </Typography>


            {intelligenceLegalDocumentsValues.map((element, index) => (
                <Grid key={index} container spacing={3} paddingBottom="10px">
                    <Grid item xs={12} sm={2}>
                        <Button disabled={element.file} fullWidth variant="contained" component="label">
                            Upload
                            <Input
                                onChange={event => handleFileChange(index, event)}
                                name={"file"}
                                accept="image/*"
                                id="contained-button-file"
                                hidden
                                multiple
                                type="file"/>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            disabled={true}
                            value={element.file !== null? element.file.name: element.name}
                            onChange={event => handleChange(index, event)}
                            name={"name"}
                            required
                            label="Document name"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {element.file && (
                            <IconButton variant="contained" color="success">
                                <CheckIcon></CheckIcon>
                            </IconButton>
                        )}
                    </Grid>
                    <Divider/>
                </Grid>
            ))}

            <Button
                variant="contained"
                sx={{mt: 3, ml: 1}}
                onClick={addFormFields}
            >
                Add
            </Button>

            <Grid item xs={12} sm={12}>
                <Button
                    className="sv-btn"
                    variant="contained"
                    onClick={handleNextSubmit}
                    sx={{mt: 3, ml: 1}}
                >
                    Next
                </Button>
            </Grid>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    return {
        isLoggedIn,
    };
}

let WrappedIntelligenceLegalDocumentsComponent = withRouter(IntelligenceLegalDocuments);

export default connect(mapStateToProps)(WrappedIntelligenceLegalDocumentsComponent)