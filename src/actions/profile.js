import {
    ARTICLE_CREATE_FAIL,
    ARTICLE_CREATE_SUCCESS,
    CERTIFICATE_CREATE_FAIL,
    CERTIFICATE_CREATE_SUCCESS,
    DEVELOPMENT_CREATE_FAIL,
    DEVELOPMENT_CREATE_SUCCESS,
    DOCUMENT_CREATE_FAIL,
    DOCUMENT_CREATE_SUCCESS,
    GET_ACADEMIC_DEGREE_SUCCESS,
    GET_ACADEMIC_TITLE_SUCCESS,
    GET_ARTICLE_TYPE_SUCCESS,
    GET_DEVELOPMENT_TYPE_SUCCESS,
    GET_PROJECT_TYPE_SUCCESS, GET_REQUEST_BY_ID_SUCCESS,
    INTELLIGENCE_LEGAL_DOCUMENTS_CREATE_FAIL,
    INTELLIGENCE_LEGAL_DOCUMENTS_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
    PROJECT_CREATE_SUCCESS,
    REQUEST_CREATE_FAIL,
    REQUEST_CREATE_SUCCESS,
    SET_MESSAGE,
    USER_PROFESSIONAL_INFO_CREATE_FAIL,
    USER_PROFESSIONAL_INFO_CREATE_SUCCESS

} from "./types";

import ProfileService from "../services/profile.service";

export const documentCreate = (cv, passport, photo) => (dispatch) => {
    const formData = new FormData();
    formData.append('cv', cv);
    formData.append('passport', passport);
    formData.append('photo', photo);
    return ProfileService.filesUpload(formData).then(
        (response) => {
            dispatch({
                type: DOCUMENT_CREATE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: DOCUMENT_CREATE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const intelligenceLegalDocumentsCreate = (name, data) => (dispatch) => {
    const formData = new FormData();
    formData.append("file", data);

    return ProfileService.intelligenceLegalDocumentsCreate(name, formData).then(

        (response) => {
            dispatch({
                type: INTELLIGENCE_LEGAL_DOCUMENTS_CREATE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: INTELLIGENCE_LEGAL_DOCUMENTS_CREATE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const certificateCreate = (name, data) => (dispatch) => {
    const formData = new FormData();
    formData.append("file", data);

    return ProfileService.certificateUpload(name, formData).then(

        (response) => {
            dispatch({
                type: CERTIFICATE_CREATE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: CERTIFICATE_CREATE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const userProfessionalInfoCreate = (
    vacancyId,
    academicDegreeId,
    academicTitleId,
    scopus,
    scopusHIndex,
    scopusLink,
    research,
    researchHIndex,
    researchLink,
    googleScholar,
    googleScholarHIndex,
    orcid,
    experience,
    scientificInterests,
    education
) => (dispatch) => {
    return ProfileService.createUserProfessionalInfo(
        vacancyId,
        academicDegreeId,
        academicTitleId,
        scopus,
        scopusHIndex,
        scopusLink,
        research,
        researchHIndex,
        researchLink,
        googleScholar,
        googleScholarHIndex,
        orcid,
        experience,
        scientificInterests,
        education
    ).then(
        (response) => {
            dispatch({
                type: USER_PROFESSIONAL_INFO_CREATE_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: USER_PROFESSIONAL_INFO_CREATE_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const articleCreate = (formValues) => (dispatch) => {
    return ProfileService.createArticle(formValues).then(
        (response) => {
            dispatch({type: ARTICLE_CREATE_SUCCESS,});
            dispatch({type: SET_MESSAGE, payload: response.data.message,});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: ARTICLE_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message,});
            return Promise.reject();
        }
    );
};



export const developmentCreate = (formValues) => (dispatch) => {
    return ProfileService.createDevelopment(formValues).then(
        (response) => {
            dispatch({type: DEVELOPMENT_CREATE_SUCCESS,});
            dispatch({type: SET_MESSAGE, payload: response.data.message,});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: DEVELOPMENT_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message,});
            return Promise.reject();
        }
    );
};

export const createRequest = (formValues) => (dispatch) => {
    return ProfileService.createRequest(formValues).then(
        (response) => {
            dispatch({type: REQUEST_CREATE_SUCCESS,});
            dispatch({type: SET_MESSAGE, payload: response.data.message,});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: REQUEST_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message,});
            return Promise.reject();
        }
    );
};

export const createProject = (formValues) => (dispatch) => {
    return ProfileService.createProject(formValues).then(
        (response) => {
            dispatch({type: PROJECT_CREATE_SUCCESS,});
            dispatch({type: SET_MESSAGE, payload: response.data.message,});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: PROJECT_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message,});
            return Promise.reject();
        }
    );
};



export const getRequestById = (id) => (dispatch) => {
    return ProfileService.getRequestById(id).then(
        (response) => {
            dispatch({
                type: GET_REQUEST_BY_ID_SUCCESS,
                payload: response.data,
            });
            return Promise.resolve();
        })
}

export const getProjectType = () => (dispatch) => {
    return ProfileService.getProjectType().then(
        (response) => {
            dispatch({
                type: GET_PROJECT_TYPE_SUCCESS,
                payload: response.data,
            });
            return Promise.resolve();
        })
}

export const getDevelopmentType = () => (dispatch) => {
    return ProfileService.getDevelopmentType().then(
        (response) => {
            dispatch({
                type: GET_DEVELOPMENT_TYPE_SUCCESS,
                payload: response.data,
            });
            return Promise.resolve();
        })
}



export const getAcademicDegree = () => (dispatch) => {
    return ProfileService.getAcademicDegree().then(
        (response) => {
            dispatch({
                type: GET_ACADEMIC_DEGREE_SUCCESS,
                payload: response.data,
            });
            return Promise.resolve();
        })
}

export const getArticleType = () => (dispatch) => {
    return ProfileService.getArticleType().then(
        (response) => {
            dispatch({
                type: GET_ARTICLE_TYPE_SUCCESS,
                payload: response.data,
            });

            return Promise.resolve();

        })
}

export const getAcademicTitle = () => (dispatch) => {
    return ProfileService.getAcademicTitle().then(
        (response) => {
            dispatch({
                type: GET_ACADEMIC_TITLE_SUCCESS,
                payload: response.data,
            });

            return Promise.resolve();
        })
}
