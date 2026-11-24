import "/src/App.css";
import { useState } from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
import Innercontainer from "./Components/Innercontainer";
import FoodDetail from "./Components/FoodDetail";
function App() {
  const [fooddata, setfooddata] = useState([]);
  const [foodId, setfoodid] = useState("53330");
  return (
    <div>
      <Nav />
      <Search fooddata={fooddata} setfooddata={setfooddata}></Search>
      <Container>
        <Innercontainer>
          <FoodList setfoodid={setfoodid} fooddata={fooddata} />
        </Innercontainer>
        <Innercontainer>
          <FoodDetail foodId={foodId}></FoodDetail>
        </Innercontainer>
      </Container>
    </div>
  );
}
export default App;
