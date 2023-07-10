import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Private() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the token exists in sessionStorage
        if (!sessionStorage.getItem("token")) {
            // If it doesn't, navigate to the login page
            navigate("/login");
        }
    }, []);

    // If the token exists, render the private content
    return <h1>Private Content</h1>;
}

export default Private;
