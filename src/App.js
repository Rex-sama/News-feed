import SideBar from "./Components/SideBar/SideBar";
import MainRow from "./Components/MainBody/MainRow";
import MainColumn from "./Components/MainBody/MainColumn";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);

  const toggleHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "row") {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <div className="App">
      <SideBar toggle={toggleHandler} status={state} />
      {state ? <MainRow /> : <MainColumn />}
    </div>
  );
}

export default App;
