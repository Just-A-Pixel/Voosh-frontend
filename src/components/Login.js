import React, { useState } from "react";
import axios from "axios";
import Form from "./auth/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const google = () => {
        window.open(`${process.env.REACT_APP_SERVER_URL}/auth/google`, "_self");
    };
    const sendData = async () => {
        try {
            const data = {
                email,
                password,
            };
            const response = await axios.post(
              `${process.env.REACT_APP_SERVER_URL}/auth/login`,
                data,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.data.success) {
              console.log('successs')
              navigate('/')
            }
        } catch (err) {
            console.log(err);
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
                google={google}
                isSignUp={false}
            />
            
        </>
    );
};

export default Login;
