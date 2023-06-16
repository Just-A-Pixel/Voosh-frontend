import React, { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Card from "./Card";

const Home = () => {
    const [orders, setOrders] = useState([{ id: "" }]);
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    const getOrderData = async () => {
        try {
            console.log(`${process.env.REACT_APP_SERVER_URL}/data/orders`);
            const result = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/data/orders`,
                {
                    headers: { Authorization: `Bearer ${Cookies.get("jwt")}` },
                }
            );
            setOrders(result.data.sample);
            console.log(result);
            return result.data;
        } catch (error) {
            console.log(error);
            navigate("/login");
            return;
        }
    };

    const getUserOrdersData = () => {
      navigate("/orders")
  };

    const sendOrderData = async () => {
        console.log(state.items);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/data/orderList`,
                {
                    items: state.items,
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Cookies.get("jwt")}`,
                    },
                }
            );
            console.log(response);
            alert("Order saved!")
            dispatch({
              type: "CLEAR"
          });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrderData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <br />
            <br />
            <div
                className="text-gray-100 mx-4"
            >
                CHOOSE ITEM TO ADD:
            </div>
            <div className="grid grid-cols-4 gap-4 mx-4">
                {orders.map((e) => {
                    return (
                        <Card
                            key={e.id}
                            id={e.id}
                            item={e.item}
                            price={e.price}
                        />
                    );
                })}
            </div>
            <br />
            <div className="mx-4 ">
                <div className="flex justify-between">
                    <div className="text-gray-100">YOUR CART:</div>
                    <div
                        onClick={(e) => sendOrderData()}
                        className="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                        Save Items
                    </div>
                    <div
                        onClick={(e) => getUserOrdersData()}
                        className="bg-transparent hover:bg-blue-500 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                        View my orders
                    </div>
                </div>

                <br />
                <div className="grid grid-cols-4 gap-4 mx-4">
                    {state.items.map((e) => {
                        return (
                            <Card
                                key={e.id}
                                id={e.id}
                                item={e.item}
                                price={e.price}
                                showAdd={false}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Home;
