import React from "react";

export default function Api() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState("1");
  console.log("Component rendered");
  React.useEffect(
    function () {
      console.log("Effect ran");

      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => {
          setStarWarsData(data);
          console.log(data);
        });
    },
    [count]
  );
  function handleClick() {
    setCount((prevCount) => (Number(prevCount) + 1).toString());
  }
  return (
    <div>
      <h1 style={{ color: "#000" }}>Testing</h1>
      <p style={{ color: "#000" }}> THe count is {count}</p>
      <button onClick={handleClick}>Add New Character</button>
    </div>
  );
}
