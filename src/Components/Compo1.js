import React, { useMemo, useState } from "react";

function Compo1() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const handleChange = (event) => {
    setNum1(Number(event.target.value));
  };
  const handleChange1 = (event) => {
    setNum2(Number(event.target.value));
  };
  const sumFun = () => {
    setSum(num1 + num2);
  };
  const mulFun = useMemo(() => {
    console.log("multi" + num1 * num2);
    return num1 * num2;
  }, [num1, num2]);
  const toggleTheme = () => {
    if (theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setTheme({ color: "black", backgroundColor: "white" });
    }
  };
  return (
    <div className="containerDiv">
      <input
        type="number"
        placeholder="Enter a no."
        onChange={(event) => handleChange(event)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter a no."
        onChange={(event) => handleChange1(event)}
      />
      <br />
      <button onClick={sumFun}>Sum</button>
      <h4>sum is :{sum}</h4>
      <h4>Product is:{mulFun}</h4>
      <button style={theme} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Compo1;
