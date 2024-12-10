import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function Drinks() {
  const { drinks } = useSelector((state) => state.drinks);

  // const [drinks, setDrinks] = useState([]);

  // useEffect(() => {
  //   axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  //     .then((res) => setDrinks(res.data.drinks))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="d-flex">
      {drinks.map((item, index) => {
        return (
          <div key={item.idDrink} className="">
            <Card
              title={item.strDrink}
              img={item.strDrinkThumb}
              desc={item.strInstructions}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
