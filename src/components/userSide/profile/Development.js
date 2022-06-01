import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect} from "react";
import {developmentCreate, getDevelopmentType} from "../../../actions/userSide/profile";
import {withRouter} from "react-router";
import {connect} from "react-redux";


let Development = (props) => {
    const [developmentValues, setDevelopmentValues] = React.useState([
        {
            name: "",
            description: "",
            developmentTypeId: 1,
        }])

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getDevelopmentType())
    }, [])

    let handleChange = (i, e) => {
        let newFormValues = [...developmentValues];
        newFormValues[i][e.target.name] = e.target.value;
        setDevelopmentValues(newFormValues);
    }

    let addDevelopmentFields = () => {
        setDevelopmentValues([...developmentValues, {
            name: "",
            description: "",
            developmentTypeId: 1,
        }])
    }

    // let removeFormFields = (i) => {
    //     let newFormValues = [...developmentValues];
    //     newFormValues.splice(i, 1);
    //     setDevelopmentValues(newFormValues)
    // }

    let handleSubmit = () => {
        const {dispatch} = props;
        dispatch(developmentCreate(
            developmentValues
        ))
    }

    const handleNextSubmit = () => {
        handleSubmit();
        props.handleNext();
    };

    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Development
            </Typography>


            {developmentValues.map((elements, index) => (
                <Grid key={index} container spacing={3} borderBottom="thin solid #192F59" marginLeft="-12px" marginTop="10px"
                      paddingRight="24px" borderRadius="20px" paddingBottom="10px">
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.name}
                            name={"name"}
                            required
                            label="Name"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index,e) }
                            value={elements.description}
                            name={"description"}
                            required
                            label="Description"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native">
                                Development Type
                            </InputLabel>
                            <NativeSelect
                                onChange={ e => handleChange(index,e) }
                                value={elements.developmentTypeId}
                                name={"developmentTypeId"}
                            >
                                {props.developmentTypeId &&
                                    props.developmentTypeId.map((d) => (
                                        <option value={d.id} key={d.id}>
                                            {d.title}
                                        </option>
                                    ))
                                }
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Divider/>
                </Grid>
            ))}

            <Button
                variant="contained"
                sx={{mt: 3, ml: 1}}
                onClick={addDevelopmentFields}
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
                    Submit
                </Button>
            </Grid>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    return {
        isLoggedIn,
        developmentTypeId: state.profilePage.developmentTypeId
    };
}

let WrappedDevelopmentComponent = withRouter(Development);

export default connect(mapStateToProps)(WrappedDevelopmentComponent)
