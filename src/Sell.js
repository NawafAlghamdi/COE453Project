//import { json } from "express";
import React, { useState } from "react";


const Sell = () => {
    const [Name, setName] = useState('');
    const [Price, setPrice] = useState();
    const [Description, setDescription] = useState('');

  /* const handle = (e) => {
        e.preventDefault();
        const item = {Name, Price, Description}

        fetch('/', {
            method: 'Post',
            headers: { " Content-Type" : "application/json"},
            body: JSON.stringify(item )
        })
    }*/
    return ( 
        <div className="Sell">
            <h1>Sell page</h1>
            <form>
                <label>Meal Name</label>
                <input type="text" required value={Name} onChange={(e) => setName(e.target.value)}/>
                <label>Price</label>
                <input type="number" required value={Price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description</label>
                <textarea required value={Description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button >Submit</button>
            </form>
        </div>
     );
}
 
export default Sell;