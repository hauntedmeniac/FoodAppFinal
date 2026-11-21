import FoodItem from "./FoodItem";
export default function FoodList({ fooddata = [] }) {
  return (
    <div>
      {fooddata.map((food) => (
        <FoodItem key={food.idMeal} food={food} />
      ))}
    </div>
  );
}
