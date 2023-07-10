import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use fetch or axios to send a POST request to the Flask API
        const response = await fetch("https://edgardmen-urban-orbit-qrgq4gw697qc4w6g-3001.preview.app.github.dev/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // If the signup was successful, navigate to the login page
        if (response.ok) {
            navigate("/login");
        } else {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    );
}

export default Signup;
