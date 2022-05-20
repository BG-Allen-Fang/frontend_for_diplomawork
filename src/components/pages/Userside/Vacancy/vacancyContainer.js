import * as React from 'react';
import Vacancy from "./vacancy";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        vacancyPage: state.vacancyPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
    }
}

const VacancyContainer = connect(mapStateToProps,mapDispatchToProps)(Vacancy)

export default VacancyContainer;