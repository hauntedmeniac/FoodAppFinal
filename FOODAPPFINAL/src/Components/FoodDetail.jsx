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
      setfood(data);
    }
    fetchfood();
  }, []);
  return <div>food details {foodId} 
  <h1> {food.strMeal}
</h1>
  </div>;
}
