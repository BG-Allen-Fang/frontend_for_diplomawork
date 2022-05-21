import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/user/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "authorization", {email, password})
            .then((response) => {
                let localData = {...response.data};
                localData.jwtToken = response.headers.jwttoken;
                if (response.headers.jwttoken) {
                    localStorage.setItem("user", JSON.stringify(localData));
                }
                return localData;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    //http://localhost:8080/api/v1/user/activate?email=&pin_code=

    userActivation(email, pin_code) {
        return axios.post( API_URL + "activate", null, {params:{
                email: email,
                pin_code: pin_code
            }});
    }

    userForgotPass(email, pin_code) {
        return axios.put( API_URL + "forgot-password", null,  {params:{
                email: email,
                pin_code: pin_code
            }});
    }

    userChangePass(password) {
        return axios.put( API_URL + "change-password", {password: password},{ headers: authHeader() });
    }

    pin_code(email) {
        return axios.post("http://localhost:8080/api/v1/pin-code/create",null,{params:{
                email: email
            }} );
    }
    register(name, lastname, patronymic, phone, email, password) {
        return axios.post(API_URL + "registration", {
            name,
            lastname,
            patronymic,
            phone,
            email,
            password,
        });
    }
}

export default new AuthService();
