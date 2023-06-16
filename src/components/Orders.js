import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from "./Card"

const Orders = () => {
    const [userOrders, setUserOrders] = useState([{ id: "" }]);

    const getUserOrdersData = async () => {
        console.log(Cookies.get("jwt"));
        const result = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/data/userOrders`,
            { headers: { Authorization: `Bearer ${Cookies.get("jwt")}` } }
        );
        console.log(result.data.existingUser.items);
        setUserOrders(result.data.existingUser.items);
        return result.data;
    };

    useEffect(() => {
        getUserOrdersData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, {})
    return (
        <>
        <br/>
        <br/>
        <div
                className="text-gray-100 mx-4"
            >
                YOUR ORDERS:
            </div>
            <div className="grid grid-cols-4 gap-4 mx-4">
                {userOrders.map((e) => {
                    return <Card id={e.id} item={e.item} price={e.price} showAdd={false} />;
                })}
            </div>
        </>
    );
};

export default Orders;


