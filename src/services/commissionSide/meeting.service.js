import axios from "axios";
import authHeader from "../auth-header";

const BASE_URL = "http://localhost:8080/api/v1/";

const API_COMMISSION_URL = BASE_URL + "user/commission/";


class MeetingService {

    meetingCreate(formValues) {
        return axios.post(BASE_URL + "teams/create/event" , formValues,{headers: authHeader()});
    }

    getCommission() {
        return axios.get(API_COMMISSION_URL + "get-all/ccc" , {headers: authHeader()});
    }
}

export default new MeetingService();
