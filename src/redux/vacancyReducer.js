const UPDATE_EMAIL_ADDRESS = "UPDATE_EMAIL_ADDRESS";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

let initialState = {
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
};

const vacancyReducer = (state = initialState, action) => {
    return state;
}

export default vacancyReducer;