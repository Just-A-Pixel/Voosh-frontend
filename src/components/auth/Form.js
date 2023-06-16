import React from "react";
import Signup from "../Signup";
import { useNavigate } from "react-router-dom";

const Form = ({
    sendData,
    email,
    setEmail,
    password,
    setPassword,
    google,
    isSignUp,
    confirmPassword,
    setConfirmPassword,
}) => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                    {isSignUp
                        ? "Create your account"
                        : "Sign in to your account"}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendData();
                    }}
                    className="space-y-6"
                    action="#"
                    method="POST"
                >
                    <div>
                        <div className="mt-2">
                            <TextInput
                                isEmail={true}
                                email={email}
                                setEmail={setEmail}
                            />
                        </div>
                    </div>

                    <div>
                        <hr class="h-px my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="mt-2">
                            <TextInput
                                isEmail={false}
                                password={password}
                                setPassword={setPassword}
                            />
                        </div>
                    </div>
                    {isSignUp ? (
                        <div>
                            <hr class="h-px my-8 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="mt-2">
                                <TextInput
                                    isEmail={false}
                                    password={confirmPassword}
                                    setPassword={setConfirmPassword}
                                />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {isSignUp ? "Sign up" : "Sign in"}
                        </button>
                    </div>
                </form>
                <br/>
                <div className="flex justify-between">
                    
                    {!isSignUp ? <SignUpButton navigate={navigate}/> : <LoginButton navigate={navigate}/>}
                    {isSignUp ? (
                        <></>
                    ) : (
                        <LoginWithGoogleButton google={google} />
                    )}
                </div>
            </div>
        </div>
    );
};

const LoginWithGoogleButton = ({ google }) => {
    return (
        <button onClick={e => google()} class="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Log in with google
        </button>
    );
};

const LoginButton = ({navigate}) => {
    return (
        <button onClick={e => navigate('/login')} class="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Log in
        </button>
    );
};

const SignUpButton = ({navigate}) => {
    return (
        <button onClick={e => navigate('/signup')} class="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Sign up
        </button>
    );
};

const TextInput = ({ isEmail, email, setEmail, password, setPassword }) => {
    return (
        <input
            id={isEmail ? "email" : "password"}
            name={isEmail ? "email" : "password"}
            type={isEmail ? "email" : "password"}
            autoComplete={isEmail ? "email" : "password"}
            placeholder={isEmail ? "Email" : "Password"}
            value={isEmail ? email : password}
            onChange={(e) =>
                isEmail ? setEmail(e.target.value) : setPassword(e.target.value)
            }
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    );
};
export default Form;
