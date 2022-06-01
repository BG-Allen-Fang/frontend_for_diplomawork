import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect} from "react";
import {createProject, createRequest, getProjectType} from "../../../actions/userSide/profile";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import moment from "moment";


let Project = (props) => {
    const [projectValues, setProjectValues] = React.useState([
        {
            projectName: "",
            startedDate: "2022-01-01",
            finishedDate: "2022-01-01",
            role: "",
            sum: 0,
            fund: "",
            projectTypeId: 1,
        }])

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getProjectType())
    }, [])

    let handleChange = (i, e) => {
        let newProjectValues = [...projectValues];
        newProjectValues[i][e.target.name] = e.target.value;
        setProjectValues(newProjectValues);
    }

    let addProjectFields = () => {
        setProjectValues([...projectValues, {
            projectName: "",
            startedDate: "2022-01-01",
            finishedDate: "2022-01-01",
            role: "",
            sum: 0,
            fund: "",
            projectTypeId: 1,
        }])
    }

    // let removeFormFields = (i) => {
    //     let newProjectValues = [...projectValues];
    //     newProjectValues.splice(i, 1);
    //     setProjectValues(newProjectValues)
    // }

    let handleSubmit = () => {
        const {dispatch} = props;
        let requestValues={
            createdDate:moment(),
            additional:"",
        }
        dispatch(createProject(projectValues)).
        then(() => dispatch(createRequest(requestValues)))
    }


    const handleNextSubmit = () => {
        handleSubmit();
        props.handleNext();
    };

    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Projects
            </Typography>


            {projectValues.map((elements, index) => (
                <Grid key={index} container spacing={3} borderBottom="thin solid #192F59" marginLeft="-12px" marginTop="10px"
                      paddingRight="24px" borderRadius="20px" paddingBottom="10px">
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.projectName}
                            name={"projectName"}
                            required
                            label="Name"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.startedDate}
                            name={"startedDate"}
                            id="date"
                            label="Start Date"
                            type="date"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.finishedDate}
                            name={"finishedDate"}
                            id="date"
                            label="Finish Date"
                            type="date"
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.role}
                            name={"role"}
                            required
                            label="Role"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native">
                                Development Type
                            </InputLabel>
                            <NativeSelect
                                onChange={ e => handleChange(index,e) }
                                value={elements.projectTypeId}
                                name={"projectTypeId"}
                            >
                                {props.projectTypeId &&
                                    props.projectTypeId.map((d) => (
                                        <option value={d.id} key={d.id}>
                                            {d.title}
                                        </option>
                                    ))
                                }
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.sum}
                            name={"sum"}
                            type={"number"}
                            required
                            label="Budget"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.fund}
                            name={"fund"}
                            required
                            label="Fund"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Divider/>
                </Grid>
            ))}

            <Button
                variant="contained"
                sx={{mt: 3, ml: 1}}
                onClick={addProjectFields}
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
        projectTypeId: state.profilePage.projectTypeId
    };
}

let WrappedProjectComponent = withRouter(Project);

export default connect(mapStateToProps)(WrappedProjectComponent)
