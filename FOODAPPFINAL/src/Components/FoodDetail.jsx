import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  {/*
    const [isloading,setisloading]=usestate(true)
     */}
  const [food, setfood] = useState({});
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php`; //https://api.spoonacular.com/recipes/${foodId}/information
  // const API_KEY = "cd3f3fbf056b4bbaa1ca95c0401e1d3c";

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?i=${foodId}`); //?apiKey=${API_KEY}
      const data = await res.json();
      console.log(data);
      setfood(data.meals[0]);
      {/*setisloading(false) */}
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
        <div>
          <span>
          <strong> Date Added {food.dateModified}</strong>
        </span>
        <span> Area Eaten {food.strArea} </span>
        <span> Area of Origin {food.strCountry} </span>
        <span> category {food.strCategory} </span>
       
        <span> {food.strYoutube} </span>
        </div>
      </div>
      <div>
        <h2> Instructions </h2>
        <h3>  <strong> {food.strInstructions} </strong></h3>
      </div>
      {/*
      <div>
    <h2> Instructions </h2>
    {isloading? <p>Loading .....</p> : food.analyzedInstructions[0].steps.map((step)=>(<li> {step.step} </li>))}
      </div>
      */}
    </div>
  );
}
