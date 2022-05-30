import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Divider, FormControl, InputLabel, NativeSelect} from "@mui/material";
import Button from "@mui/material/Button";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {useEffect} from "react";
import {
    articleCreate,
    getArticleType,
} from "../../../actions/profile";

let ArticleComponent = (props) => {

    const [formValues, setFormValues] = React.useState([
        {
            title: "",
            apa: "",
            doi: "",
            articleTypeId: 1,
            authors: "",
            source: ""
        }])

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getArticleType())
    },[])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            title: "",
            apa: "",
            doi: "",
            articleTypeId: 1,
            authors: "",
            source: ""
        }])
    }

    // let removeFormFields = (i) => {
    //     let newFormValues = [...formValues];
    //     newFormValues.splice(i, 1);
    //     setFormValues(newFormValues)
    // }

    let handleSubmit = () => {
        const {dispatch} = props;
        dispatch(articleCreate(
            formValues
        ))
    }

    const handleNextSubmit = () => {
         handleSubmit();
         props.handleNext();
    };

    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Articles
            </Typography>


            {formValues.map((element, index) => (
                <Grid key={index} container spacing={3} borderBottom="thin solid #192F59" marginLeft="-12px" marginTop="10px"
                      paddingRight="24px" borderRadius="20px" paddingBottom="10px">
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index, e)}
                            value={element.title}
                            name="title"
                            required
                            label="Title"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index, e)}
                            value={element.apa}
                            name="apa"
                            label="APA"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index, e)}
                            value={element.doi}
                            name="doi"
                            required
                            label="DOI"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native">
                                Article Type
                            </InputLabel>
                            <NativeSelect
                                onChange={ e => handleChange(index, e)}
                                value={element.articleTypeId}
                                name="articleTypeId"
                            >
                                {props.articleType &&
                                    props.articleType.map((a) => (
                                        <option value={a.id} key={a.id}>
                                            {a.title}
                                        </option>
                                    ))
                                }
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index, e)}
                            value={element.authors}
                            name="authors"
                            required
                            label="Authors"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            onChange={ e => handleChange(index, e)}
                            value={element.source}
                            name="source"
                            required
                            label="Source link"
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

// Intelligence Legal Documents

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    return {
        isLoggedIn,
        articleType: state.profilePage.articleType
    };
}

let WrappedArticleComponent = withRouter(ArticleComponent);

export default connect(mapStateToProps)(WrappedArticleComponent)
