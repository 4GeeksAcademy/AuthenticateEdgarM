import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove the token from sessionStorage
        sessionStorage.removeItem("token");

        // Navigate to the home page
        navigate("/");
    }, []);

    return null;
}

export default Logout;
