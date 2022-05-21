import {
    GET_VACANCY_BY_ID,
    SET_VACANCY
} from "../../actions/types";

let initialState = {
    vacancies: []
};

const vacancyReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_VACANCY:
            return {...state, vacancies: [ ...payload]}
        case GET_VACANCY_BY_ID:
            return {...state,  vacancies: [...state.vacancies, payload]}
        default:
            return state;
    }
}

export default vacancyReducer;