import * as React from 'react';
import {connect} from "react-redux";
import {getAllVacancy} from "../../../actions/userSide/vacancy";
import Vacancy from "./Vacancy";
import {withRouter} from "react-router";
import {useEffect} from "react";

let VacancyContainer = (props) => {

    useEffect(() => {
        const {dispatch} = props;
        dispatch(getAllVacancy());
    }, [])

    return <Vacancy {...props} vacancies={props.vacancies}/>
}

let mapStateToProps = (state) => {
    return {
        vacancies: state.vacancyPage.vacancies
    }
}

let UrlDataContainerComponent = withRouter(VacancyContainer);

export default connect(mapStateToProps)(UrlDataContainerComponent)