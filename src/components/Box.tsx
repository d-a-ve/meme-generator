import React from "react";

type BoxType = {
  toggleClick: (id: number) => void;
  on: boolean;
  id: number;
};

export default function Box({ toggleClick, id, on }: BoxType) {
  return (
    <div
      style={{
        height: "100px",
        width: "150px",
        border: "1px solid #ed52aa",
        margin: "10px",
        display: "inline-block",
        backgroundColor: on ? "#222222" : "#cccccc",
      }}
      onClick={() => toggleClick(id)}
    ></div>
  );
}
