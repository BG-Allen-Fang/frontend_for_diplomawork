import {
    DOCUMENT_CREATE_SUCCESS,
    DOCUMENT_CREATE_FAIL,
    GET_ACADEMIC_DEGREE_SUCCESS,
    GET_ACADEMIC_TITLE_SUCCESS,
    USER_PROFESSIONAL_INFO_CREATE_SUCCESS,
    USER_PROFESSIONAL_INFO_CREATE_FAIL,
    GET_ARTICLE_TYPE_SUCCESS,
    ARTICLE_CREATE_FAIL,
    ARTICLE_CREATE_SUCCESS,
    CERTIFICATE_CREATE_FAIL,
    CERTIFICATE_CREATE_SUCCESS,
    GET_DEVELOPMENT_TYPE_SUCCESS,
    DEVELOPMENT_CREATE_SUCCESS,
    DEVELOPMENT_CREATE_FAIL,
    GET_PROJECT_TYPE_SUCCESS,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_SUCCESS,
    GET_REQUEST_BY_ID_SUCCESS,
} from "../../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case DOCUMENT_CREATE_SUCCESS:
            return {
                ...state,
            };
        case DOCUMENT_CREATE_FAIL:
            return {
                ...state,
            };
        case USER_PROFESSIONAL_INFO_CREATE_SUCCESS:
            return {
                ...state,
            };
        case USER_PROFESSIONAL_INFO_CREATE_FAIL:
            return {
                ...state,
            };
        case ARTICLE_CREATE_SUCCESS:
            return {
                ...state,
            };
        case ARTICLE_CREATE_FAIL:
            return {
                ...state,
            };
        case CERTIFICATE_CREATE_SUCCESS:
            return {
                ...state,
            };
        case CERTIFICATE_CREATE_FAIL:
            return {
                ...state,
            };
        case DEVELOPMENT_CREATE_SUCCESS:
            return {
                ...state,
            };
        case DEVELOPMENT_CREATE_FAIL:
            return {
                ...state,
            };
        case PROJECT_CREATE_SUCCESS:
            return {
                ...state,
            };
        case PROJECT_CREATE_FAIL:
            return {
                ...state,
            };



        case GET_REQUEST_BY_ID_SUCCESS:
            return {
                ...state,
                requestById: [payload]
            };
        case GET_PROJECT_TYPE_SUCCESS:
            return {
                ...state,
                projectTypeId: [ ...payload]
            };
        case GET_ACADEMIC_DEGREE_SUCCESS:
            return {
                ...state,
                academicDegree: [ ...payload]
            };
        case GET_ACADEMIC_TITLE_SUCCESS:
            return {
                ...state,
                academicTitle: [ ...payload]
            };
        case GET_ARTICLE_TYPE_SUCCESS:
            return {
                ...state,
                articleType: [ ...payload]
            };
        case GET_DEVELOPMENT_TYPE_SUCCESS:
            return {
                ...state,
                developmentTypeId: [ ...payload]
            };



        default:
            return state;
    }
}
