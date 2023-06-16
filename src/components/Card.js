import React, { useContext } from "react";
import { UserContext } from "../App";

const Card = ({ id, item, price, showAdd=true }) => {
    const { state, dispatch } = useContext(UserContext);

    const add = () => {
        dispatch({
            type: "INCREMENT",
            payload: {
                id,
                item,
                price,
            },
        });
        console.log(state);
    };
    
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item}
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${price}
            </p>

            {showAdd?<button
                onClick={(e) => add()}
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                Add
            </button> : <></>
            }   
        </div>
    );
};

export default Card;
