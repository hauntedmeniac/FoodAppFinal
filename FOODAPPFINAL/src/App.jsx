import "/src/App.css";
import { useState } from "react";
import Nav from "./Components/Nav"
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
function App() {
  const [fooddata, setfooddata] = useState([]);
  return (
    <div>
      <Nav/>
      <Search fooddata={fooddata} setfooddata={setfooddata}></Search>
      <Container>
        <FoodList fooddata={fooddata} />
      </Container>
    </div>
  );
}
export default App;
