import "./App.css";
import Button from "./Button.js";
import Result from "./result.js";

function Title(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  );
}
function GetInputValue() {
  return parseInt(document.getElementById("numberInput").value);
}
function App() {
  let { state, setState } = Result(0);

  return (
    <div>
      <Title msg="My Calculator" />
      <h1>Result :{state}</h1>
      <input type="number" id="numberInput" placeholder="Enter Number"></input>
      <Button
        name="Add"
        value={GetInputValue}
        result={state}
        setValue={setState}
      />
      <Button
        name="Subtract"
        value={GetInputValue}
        result={state}
        setValue={setState}
      />
    </div>
  );
}

export default App;
