import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewUserDetails = (_) => {
    const { state } = useLocation();

    return (
        <div>
            <div>
                <div>
                    <strong>Id:</strong>
                </div>
            </div>

            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
};

export default ViewUserDetails;
