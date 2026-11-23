import styles from "./fooditem.module.css";
export default function FoodItem({ food, setfoodid }) {
  return (
    <div className={styles.itemcontainer}>
      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.strMeal}</p>
      </div>
      <img className={styles.itemimage} src={food.strMealThumb} />
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => {
            console.log(food.idMeal);
            setfoodid(food.idMeal);
          }}
          className={styles.itembutton}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
