import * as React from 'react';
import {connect} from "react-redux";
import {setVacancy} from "../../../actions/vacancy";
import Vacancy from "./Vacancy";
import { withRouter } from "react-router";
import VacancyService from "../../../services/vacancy.service";
import {getVacancyByIdDispatch} from "../../../actions/vacancy";

class VacancyContainer extends React.Component {

    componentDidMount() {

        VacancyService.getAllRequest().then(
            response => {
                this.props.setVacancy(response.data)
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return <Vacancy {...this.props} vacancies={this.props.vacancies} />
    }
}

let mapStateToProps = (state) => {
    return{
        vacancies: state.vacancyPage.vacancies
    }
}

let UrlDataContainerComponent = withRouter(VacancyContainer);

export default connect(mapStateToProps, {setVacancy,getVacancyByIdDispatch})(UrlDataContainerComponent)