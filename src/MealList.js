const MealList = (props) => {
  const meals = props.meals;
  return (  
      <div className="MealList">
          {meals.map((meal) =>(
              <div className="mealpriv" key={meal.Name}>
                  <h2>{ meal.name }</h2>
                  <p>{ meal.description }</p>
                  <h3> {meal.price} </h3>
                  <button>buy meal</button>
              </div>
          ))}
      </div>
  );
}

export default MealList;