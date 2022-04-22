import * as React from 'react';
import Vacancy from "./vacancy";
import StoreContext from "../../../StoreContext";


const VacancyContainer = () => {

    return (
        <StoreContext.Consumer>
            {store =>{
                const vacancyPage = store.getState().vacancyPage;
                return(
                    <Vacancy vacancyPage={vacancyPage} />
                );
            }}
        </StoreContext.Consumer>
    );
}

export default VacancyContainer;