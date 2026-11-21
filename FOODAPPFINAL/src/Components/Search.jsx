import { useState, useEffect } from "react";
import styles from "./search.module.css"
const URL = "https://www.themealdb.com/api/json/v1/1/search.php";
export default function Search({ fooddata, setfooddata }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function Fetchfood() {
      const response = await fetch(`${URL}?s=${query}`);
      const data = await response.json();
      setfooddata(data.meals);
    }
    Fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
      className ={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
