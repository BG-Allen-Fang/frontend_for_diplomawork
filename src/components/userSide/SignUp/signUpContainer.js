import * as React from 'react';
import "./SingUp.css";
import SignUp from "./signup";
import {connect} from "react-redux";

// const [values, setValues] = React.useState({
//     vacancyId: 1,
//     academicDegreeId: 0,
//     academicTitleId: 0,
//     scopus: "",
//     scopusHIndex: 0,
//     scopusLink: "",
//     research: "",
//     researchHIndex: 0,
//     researchLink: "",
//     googleScholar: "",
//     googleScholarHIndex: 0,
//     orcid: "",
//     experience: "",
//     scientificInterests: "",
//     education: "",
//
//     location: props.location,
//     loading: false,
// });

class SignUpContainer extends React.Component {

    render() {
        return <SignUp {...this.props} signUpPage={this.props.signUpPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        signUpPage: state.signUpPage
    }
}

export default connect(mapStateToProps)(SignUpContainer);