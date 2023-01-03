import React from "react";
import boxesData from "../boxes";
import Box from "./Box";

export default function Boxes() {
  let [boxes, setBoxes] = React.useState(boxesData);

  function toggle(id: number) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
      // let newBoxes = [];
      // for (let i = 0; i < prevBoxes.length; i++) {
      //   let currentBox = prevBoxes[i];
      //   if (currentBox.id === id) {
      //     const returnedBox = { ...currentBox, on: !currentBox.on };
      //     newBoxes.push(returnedBox);
      //   } else {
      //     newBoxes.push(currentBox);
      //   }
      // }
      // return newBoxes;
    });
  }

  const mappedBox = boxes.map((box) => (
    <Box key={box.id} id={box.id} toggleClick={toggle} on={box.on} />
  ));

  return <div>{mappedBox}</div>;
}
