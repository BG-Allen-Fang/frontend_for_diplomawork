import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {IconButton, Stack, styled} from "@mui/material";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import {connect} from "react-redux";
import {documentCreate, getMyDocuments} from "../../../actions/userSide/profile";
import {useEffect} from "react";

const Input = styled('input')({
    display: 'none',
});

let UserDocument = (props) => {

    const [values, setValues] = React.useState({
        cv: null,
        passport: null,
        photo: null,
        loading: false,
    });

    const handleNextSubmit = () => {
        handleSubmit();
        props.handleNext();
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getMyDocuments())
    },[])

    const handleFileChange = (props) => (event) => {
        setValues({
            ...values,
            [props]: event.target.files[0]
        });
    };

    const handleSubmit = () => {
        const {dispatch} = props;

        dispatch(documentCreate(
            values.cv,
            values.passport,
            values.photo,
        ))
    };

    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Documentation
            </Typography>
            <Grid container spacing={3}>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>

                        <Button variant="contained" component="label">
                            Upload
                            <Input onChange={handleFileChange('cv')} accept="image/*" hidden
                                   multiple type="file"/>
                        </Button>
                        <Typography>Upload CV</Typography>
                        {values.cv && (
                            <IconButton variant="contained" color="success">
                                <CheckIcon></CheckIcon>
                            </IconButton>
                        )}
                    </Stack>
                </Grid>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>

                        <Button variant="contained" component="label">
                            Upload
                            <Input onChange={handleFileChange('passport')} accept="image/*" hidden
                                   multiple type="file"/>
                        </Button>
                        <Typography>Upload Passport</Typography>
                        {values.passport && (
                            <IconButton variant="contained" color="success">
                                <CheckIcon></CheckIcon>
                            </IconButton>
                        )}
                    </Stack>
                </Grid>
                <Grid marginLeft="140px" item xs={12}>
                    <Stack direction="row" alignItems="center" spacing={2}>

                        <Button variant="contained" component="label">
                            Upload
                            <Input onChange={handleFileChange('photo')} accept="image/*" hidden
                                   multiple type="file"/>
                        </Button>
                        <Typography>Upload Photo 3*4</Typography>
                        {values.photo && (
                            <IconButton variant="contained" color="success">
                                <CheckIcon></CheckIcon>
                            </IconButton>
                        )}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                        className="sv-btn"
                        variant="contained"
                        onClick={handleNextSubmit}
                        sx={{ mt: 3, ml: 1 }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    myDocuments: state.profilePage.myDocuments,
});

export default connect(mapStateToProps)(UserDocument);