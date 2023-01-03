import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function resize() {
      console.log("setting up...");
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", resize);

    return function () {
      console.log("cleaning up...");
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <h1 style={{ color: "#000" }}>Window width: {window.innerWidth}</h1>;
}
