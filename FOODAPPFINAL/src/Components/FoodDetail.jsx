import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setfood] = useState({});
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php`; //https://api.spoonacular.com/recipes/${foodId}/information
  // const API_KEY = "cd3f3fbf056b4bbaa1ca95c0401e1d3c";

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?i=${foodId}`); //?apiKey=${API_KEY}
      const data = await res.json();
      console.log(data);
      setfood(data.meals[0]);
    }
    fetchfood();
  }, [foodId]);
  return (
    <div>
     <div><h1> {food.strMeal}</h1>
      <img src={food.strMealThumb}/>
      <div>
  {/*  
  making this as a comment because im not on sponacular
  <span>
    <strong> 🕐 {food.readyinminutes} minutes</strong>
    </span>
    <span>
    <strong> Serves {food.servings}</strong>
    </span>
      <span>
{food.vegeterian ? "vegetarian": "non-vegetarian"}
      </span>
      <span>
      {food.vegan ? "vegan" : "non-vegan"}
      </span>
      */}
      </div>
    {/*  <div>
       $ <span>
          {food.priceperserving /100}
        </span>
        </div> */}
      </div>
    </div>
  );
}
