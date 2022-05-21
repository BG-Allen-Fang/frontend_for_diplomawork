import VacancyService from "../services/vacancy.service";
import {GET_VACANCY_BY_ID, SET_VACANCY} from "./types";

export const getVacancyByIdDispatch = (id) => (dispatch) => {
    return VacancyService.getByIdRequest(id).then(
        (response) => {
            dispatch({
                type: GET_VACANCY_BY_ID,
                payload: response.data,
            });

            return Promise.resolve();
        }
    );
};

export const setVacancy = (vacancies) => ({type: SET_VACANCY, payload: vacancies});