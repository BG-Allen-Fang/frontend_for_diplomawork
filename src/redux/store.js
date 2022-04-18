import signUpReducer from "./signUpReducer";
import signInReducer from "./signInReducer";

let store = {
    //private func
    _state: {
        vacancyPage: {
            vacancies: [
                {
                    id: 1,
                    name: "Vacancy 1",
                    description: "description for Vacancy 1",
                    image: "https://source.unsplash.com/random"
                },
                {
                    id: 2,
                    name: "Vacancy 2",
                    description: "description for Vacancy 2",
                    image: "https://source.unsplash.com/random"
                },
                {
                    id: 3,
                    name: "Vacancy 3",
                    description: "description for Vacancy 3",
                    image: "https://source.unsplash.com/random"
                },
                {
                    id: 4,
                    name: "Vacancy 4",
                    description: "description for Vacancy 4",
                    image: "https://source.unsplash.com/random"
                },
                {
                    id: 5,
                    name: "Vacancy 5",
                    description: "description for Vacancy 5",
                    image: "https://source.unsplash.com/random"
                },
                {
                    id: 6,
                    name: "Vacancy 6",
                    description: "description for Vacancy 6",
                    image: "https://source.unsplash.com/random"
                }
            ]
        },
        signUpPage: {
            newFirstNameText: '',
            newLastNameText: '',
            newPatronymicText: '',
            newPhoneNumberText: '',
            newEmailAddressText: '',
            newPasswordText: '',
        },
        signInPage: {
            newEmailAddressText: '',
            newPasswordText: '',
        }
    },
    _callSubscriber(){
        console.log("change")
    },

    // public func
    // Function that doesn't change state
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    // Func that change state
    dispatch(action){
        this._state.signUpPage = signUpReducer(this._state.signUpPage, action);
        this._state.signInPage = signInReducer(this._state.signInPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;