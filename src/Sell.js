import { useState } from "react";

const Sell = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        const item = {name, price, description}
    
        fetch('http://localhost:5000/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item)
        }).then(() => {
          console.log('new item added');
        })
      }


    return ( 
        <div className="Sell">
            <h1>Sell page</h1>
            <form onSubmit={handleSubmit}>
                <label>Meal Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Price</label>
                <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description</label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button >Submit</button>
            </form>
        </div>
     );
}
 
export default Sell;