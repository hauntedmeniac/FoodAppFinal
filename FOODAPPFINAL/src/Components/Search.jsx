import { useState, useEffect } from "react";
import styles from "./search.module.css";
const URL = `https://www.themealdb.com/api/json/v1/1/search.php`;
//const API_KEY = "cd3f3fbf056b4bbaa1ca95c0401e1d3c";
export default function Search({ fooddata, setfooddata }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function Fetchfood() {
      const res = await fetch(`${URL}?s=${query}`); //?query //&apiKey=${API_KEY}
      const data = await res.json();
      setfooddata(data.meals || []);
    }
    Fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
