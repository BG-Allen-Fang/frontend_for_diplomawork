import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getAllVacancy} from "../../../actions/userSide/vacancy";
import {
    getAcademicDegree,
    getAcademicTitle,
    getIsUPI,
    getUPIById,
    userProfessionalInfoCreate, userProfessionalInfoUpdate
} from "../../../actions/userSide/profile";
import {useEffect} from "react";
import Button from "@mui/material/Button";
import "./profile.css"

let UserProfessionalInfo = (props) => {
    const [values, setValues] = React.useState({
        vacancyId: 1,
        academicDegreeId: 1,
        academicTitleId: 1,
        scopus: "",
        scopusHIndex: 0,
        scopusLink: "",
        research: "",
        researchHIndex: 0,
        researchLink: "",
        googleScholar: "",
        googleScholarHIndex: 0,
        orcid: "",
        experience: "",
        scientificInterests: "",
        education: "",

        location: props.location,
        isExist: false,
        loading: false,
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        const {dispatch} = props;
        dispatch(getAllVacancy())
        dispatch(getAcademicDegree())
        dispatch(getAcademicTitle())
        dispatch(getIsUPI(props.user.id)).then((res) => {
            if (res) {
                dispatch(getUPIById(props.user.id)).then((res) => {
                    setValues({
                        ...values,
                        isExist: true,

                        vacancyId: res.vacancy.id,
                        academicDegreeId: res.academicDegree.id,
                        academicTitleId: res.academicTitle.id,
                        scopus: res.scopus,
                        scopusHIndex: res.scopusHIndex,
                        scopusLink: res.scopusLink,
                        research: res.research,
                        researchHIndex: res.researchHIndex,
                        researchLink: res.researchLink,
                        googleScholar: res.googleScholar,
                        googleScholarHIndex: res.googleScholarHIndex,
                        orcid: res.orcid,
                        experience: res.experience,
                        scientificInterests: res.scientificInterests,
                        education: res.education,
                    })
                })
            } else if (values.location.state) {
                setValues({
                    ...values,
                    vacancyId: values.location.state.vacancy.id
                });
            }
        })


    }, [])

    const handleChange = (props) => (event) => {
        setValues({
            ...values,
            [props]: event.target.value
        });
    };

    const handleNextSubmit = () => {
        values.isExist?
            handleUpdate():
            handleSubmit()

        props.handleNext();
    };

    const handleSubmit = () => {
        const {dispatch} = props;
        dispatch(userProfessionalInfoCreate(
            values.vacancyId,
            values.academicDegreeId,
            values.academicTitleId,
            values.scopus,
            values.scopusHIndex,
            values.scopusLink,
            values.research,
            values.researchHIndex,
            values.researchLink,
            values.googleScholar,
            values.googleScholarHIndex,
            values.orcid,
            values.experience,
            values.scientificInterests,
            values.education,

        ))
    };

    const handleUpdate = () => {
        const {dispatch} = props;
        dispatch(userProfessionalInfoUpdate(
            values.vacancyId,
            values.academicDegreeId,
            values.academicTitleId,
            values.scopus,
            values.scopusHIndex,
            values.scopusLink,
            values.research,
            values.researchHIndex,
            values.researchLink,
            values.googleScholar,
            values.googleScholarHIndex,
            values.orcid,
            values.experience,
            values.scientificInterests,
            values.education,

            props.UPIById.id,
        ))
    };

    //UPIById

    return (
        <React.Fragment>
            <Typography align="center" variant="h6" gutterBottom>
                Professional Information
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <FormControl fullWidth>

                        <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native" required>
                            Vacancy
                        </InputLabel>
                        <NativeSelect
                            onChange={handleChange('vacancyId')}
                            value={values.vacancyId}
                        >

                            {props.vacancies &&
                                props.vacancies.map((v) => (
                                    <option value={v.id} key={v.id}>
                                        {v.academicTitleDtoResponse.title + " (" + v.department.departmentName + ")"}
                                    </option>
                                ))
                            }
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native" required>
                            Academic Degree
                        </InputLabel>
                        <NativeSelect
                            onChange={handleChange('academicDegreeId')}
                            value={values.academicDegreeId}
                        >
                            {props.academicDegree &&
                                props.academicDegree.map((a) => (
                                    <option value={a.id} key={a.id}>
                                        {a.title}
                                    </option>
                                ))
                            }
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel shrink={true} variant="standard" htmlFor="uncontrolled-native">
                            Academic Title
                        </InputLabel>
                        <NativeSelect
                            onChange={handleChange('academicTitleId')}
                            value={values.academicTitleId}
                        >
                            {props.academicTitle &&
                                props.academicTitle.map((a) => (
                                    <option value={a.id} key={a.id}>
                                        {a.title}
                                    </option>
                                ))
                            }
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange('education')}
                        value={values.education}
                        required
                        label="Education"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange('experience')}
                        value={values.experience}
                        required
                        label="Experience"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange('scientificInterests')}
                        value={values.scientificInterests}
                        required
                        label="Scientific Interests"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        onChange={handleChange('scopus')}
                        value={values.scopus}
                        required
                        label="Scopus ID"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        onChange={handleChange('scopusHIndex')}
                        value={values.scopusHIndex}
                        type={"number"}
                        required
                        label="HIndex"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        onChange={handleChange('scopusLink')}
                        value={values.scopusLink}
                        required
                        label="Scopus Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        onChange={handleChange('orcid')}
                        value={values.orcid}
                        required
                        label="Orc ID"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        onChange={handleChange('research')}
                        value={values.research}
                        required
                        label="Research ID"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        onChange={handleChange('researchHIndex')}
                        value={values.researchHIndex}
                        type={"number"}
                        required
                        label="Research HIndex"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        onChange={handleChange('researchLink')}
                        value={values.researchLink}
                        required
                        label="Research Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={handleChange('googleScholar')}
                        value={values.googleScholar}
                        required
                        label="Scholar Link"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={handleChange('googleScholarHIndex')}
                        value={values.googleScholarHIndex}
                        type={"number"}
                        required
                        label="Scholar HIndex"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
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
            </Grid>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        vacancies: state.vacancyPage.vacancies,
        academicDegree: state.profilePage.academicDegree,
        academicTitle: state.profilePage.academicTitle,
        UPIById: state.profilePage.UPIById,
    };
}

let UserProfessionalInfoComponent = withRouter(UserProfessionalInfo);

export default connect(mapStateToProps)(UserProfessionalInfoComponent)

