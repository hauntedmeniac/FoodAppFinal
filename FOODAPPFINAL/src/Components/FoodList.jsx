import FoodItem from "./FoodItem";
export default function FoodList({ fooddata, setfoodid }) {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem setfoodid={setfoodid} key={food.idMeal} food={food} />
      ))}
    </div>
  );
}
