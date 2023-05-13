import { useState , useEffect} from "react";
import MealList from "./MealList";

const Buy = () => {
    const [meals, setMeal] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/buy')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data)
            setMeal(data);
          })
      }, [])
    return (
        <div className="Buy">
            <h1>Buy page</h1>
            {meals && <MealList meals={meals}/>}
        </div>
    );
}
 
export default Buy;