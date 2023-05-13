import { useState, useEffect } from 'react';
import Buy from './Buy';

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals(Buy.meals);
  }, []);

  return (
    <div className="MealList">
      {meals.map((meal) => (
        <div className="mealpriv" key={meal.id}>
          <h2>{meal.name}</h2>
          <p>{meal.description}</p>
          <h3>{meal.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default MealList;
