import React from "react";
import { useState } from "react";
import MealList from "./MealList";

const Buy = () => {
    const [meals, setMeal] = useState([])
    return (
        <div className="Buy">
            <h1>Buy page</h1>
            <MealList/>
        </div>
    );
}
 
export default Buy;