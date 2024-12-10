import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

function Main() {
  const [drinks, setDrinks] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => setDrinks(res.data.drinks))
      .catch((err) => console.log(err));
  }, []);

  function findLongestName(data) {
    console.log("Hello I am calling..");
    let longestName = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.strInstructions?.length > longestName?.length) {
        longestName = data[i]?.strInstructions;
      }
    }
    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(drinks), [drinks]);

  return (
    <div>
      <h2>Instruction: {getLongestName}</h2>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Click me
      </button>
    </div>
  );
}

export default Main;
