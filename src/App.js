import React, {useReducer} from "react";
import { cartReducer, initialstate } from "./Reducer";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Signup from "./components/Signup";

export const UserContext = React.createContext(null);

function App() {
    const [state, dispatch] = useReducer(cartReducer, initialstate)
    return (
        <BrowserRouter>
            <div>
                <UserContext.Provider value={{ state, dispatch }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/orders" element={<Orders/> }/>
                        <Route path="/failure" element={<Orders/> }/>
                    </Routes>
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
