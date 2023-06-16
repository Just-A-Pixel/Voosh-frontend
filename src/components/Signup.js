import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./auth/Form";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    const sendData = async () => {
        if (password !== confirmPassword) {
            console.log("Password mismatch");
            alert("Password Mismatch")
            return;
        }

        console.log(`HELLOO  ${process.env.SERVER_URL}/auth/signup`)
        try {
            const data = {
                email,
                password
            }

            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/auth/signup`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if(response.data.success) {
                navigate('/')
            }
            console.log(response);
        } catch (err) {
            console.log(err);
            alert("User Exists")
            navigate("/login")
            return
        }
    };

    return (
        <>
            <Form
                sendData={sendData}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                isSignUp={true}
            />
        </>
    );
};

export default Signup;
