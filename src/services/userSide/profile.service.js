import axios from "axios";
import authHeader from "../auth-header";

const BASE_URL = "http://localhost:8080/api/v1/";

const API_PROJECT_URL = BASE_URL + "hiring/project/";
const API_REQUEST_URL = BASE_URL + "hiring/request/";
const API_CERTIFICATE_URL = BASE_URL + "hiring/certificate/";
const API_ARTICLE_URL = BASE_URL + "hiring/article/";
const API_DEVELOPMENT_URL = BASE_URL + "hiring/development/";
const API_INTELLIGENCE_LEGAL_DOCUMENTS_URL = BASE_URL + "hiring/intelligence-legal-document/";

const API_DOCUMENT_URL = BASE_URL + "user/user-document/";
const API_PROF_INFO_URL = BASE_URL + "user/user-professional-info/";

const CATALOG_URL = BASE_URL + "catalog/";

class ProfileService {
    filesUpload(formData) {
        return axios.post(
            API_DOCUMENT_URL + "create", formData, {headers: authHeader()})
    }

    certificateUpload(file_name, formData) {
        return axios.post(
            API_CERTIFICATE_URL + "create", formData, {headers: authHeader(),params:{
                    file_name: file_name
        }})
    }

    intelligenceLegalDocumentsCreate(file_name, formData) {
        return axios.post(
            API_INTELLIGENCE_LEGAL_DOCUMENTS_URL + "create", formData, {headers: authHeader(),params:{
                    file_name: file_name
                }})
    }

    createUserProfessionalInfo(
        vacancyId, academicDegreeId, academicTitleId, scopus,
        scopusHIndex, scopusLink, research, researchHIndex,
        researchLink, googleScholar, googleScholarHIndex, orcid,
        experience, scientificInterests, education
    ) {
        return axios.post(API_PROF_INFO_URL + "create", {
            vacancyId, academicDegreeId, academicTitleId, scopus,
            scopusHIndex, scopusLink, research, researchHIndex,
            researchLink, googleScholar, googleScholarHIndex, orcid,
            experience, scientificInterests, education
        }, {headers: authHeader()});
    }
    userProfessionalInfoUpdate(
        vacancyId, academicDegreeId, academicTitleId, scopus,
        scopusHIndex, scopusLink, research, researchHIndex,
        researchLink, googleScholar, googleScholarHIndex, orcid,
        experience, scientificInterests, education, userId
    ) {
        return axios.put(API_PROF_INFO_URL + "update/id/" + userId, {
            vacancyId, academicDegreeId, academicTitleId, scopus,
            scopusHIndex, scopusLink, research, researchHIndex,
            researchLink, googleScholar, googleScholarHIndex, orcid,
            experience, scientificInterests, education
        }, {headers: authHeader()});
    }

    createArticle(formValues) {
        return axios.post(API_ARTICLE_URL + "create/all", formValues, {headers: authHeader()});
    }

    createDevelopment(formValues) {
        return axios.post(API_DEVELOPMENT_URL + "create/all", formValues, {headers: authHeader()});
    }

    createProject(formValues) {
        return axios.post(API_PROJECT_URL + "create/all", formValues, {headers: authHeader()});
    }

    createRequest(formValues) {
        return axios.post(API_REQUEST_URL + "create", formValues, {headers: authHeader()});
    }




    getIsUPI(id) {
        return axios.get(API_PROF_INFO_URL + "get/is-valid-user/id/" + id, {headers: authHeader()});
    }
    getUPIById(id) {
        return axios.get(API_PROF_INFO_URL + "get/user/id/" + id , {headers: authHeader()});
    }
    getMyArticles() {
        return axios.get(API_ARTICLE_URL + "get/my-articles", {headers: authHeader()});
    }
    getMyCertificates() {
        return axios.get(API_CERTIFICATE_URL + "get/my-certificates", {headers: authHeader()});
    }
    getMyDocuments() {
        return axios.get(API_DOCUMENT_URL + "get/my-documents", {headers: authHeader()});
    }





    getMyRequest() {
        return axios.get(API_REQUEST_URL + "get/my-request" , {headers: authHeader()});
    }

    getProjectType() {
        return axios.get(CATALOG_URL + "project-type/get-all", {headers: authHeader()});
    }

    getDevelopmentType() {
        return axios.get(CATALOG_URL + "development-type/get-all", {headers: authHeader()});
    }

    getAcademicDegree() {
        return axios.get(CATALOG_URL + "academic-degree/get-all", {headers: authHeader()});
    }

    getArticleType() {
        return axios.get(CATALOG_URL + "article-type/get-all", {headers: authHeader()});
    }

    getAcademicTitle() {
        return axios.get(CATALOG_URL + "academic-title/get-all", {headers: authHeader()});
    }

}

export default new ProfileService();
