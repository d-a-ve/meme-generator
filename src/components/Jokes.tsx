import React from "react";

export type JokesType = {
  id: number;
  setup: string;
  punchline: string;
};

export function Jokes({ id, setup, punchline }: JokesType) {
  const [isShown, setIsShown] = React.useState(false);

  function changeShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {setup && <h3>{setup}</h3>}
      {isShown && <p>{punchline}</p>}
      <button onClick={changeShown}>
        {!isShown ? "Show" : "Hide"} Punchline
      </button>
    </div>
  );
}
