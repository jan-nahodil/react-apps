import { useState } from "react";
import InputRow from "./components/InputRow";
import Header from "./components/Header";
import CalculatedValues from "./components/CalculatedValues";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 1200,
    annualInvestment: 10,
    expectedReturn: 5,
    duration: 8,
  });

  function handleValueChange(newValue, what) {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [what]: Number(newValue),
      };
    });
  }

  const reightValue = value.duration >= 1;

  return (
    <>
      <Header />
      <InputRow value={handleValueChange} userInput={value} />
      {!reightValue && (
        <p>
          <center>Not valid!</center>
        </p>
      )}
      {reightValue && <CalculatedValues input={value} />}
    </>
  );
}

export default App;
