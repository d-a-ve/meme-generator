import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => {
        setAllMeme(response.data.memes);
      });
  }, []);

  function getRandomImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    // used square bracket notation for the object because it initially has a type of "never" before api call
    const selectedMemeUrl = allMeme[randomNumber]["url"];

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: selectedMemeUrl,
      };
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main className="main">
      <div>
        <div className="form-fields">
          <input
            onChange={handleChange}
            name="topText"
            type="text"
            placeholder="Top text"
          />
          <input
            onChange={handleChange}
            name="bottomText"
            type="text"
            placeholder="Bottom text"
          />
        </div>
        <button
          className="get-meme-image-btn"
          type="submit"
          value="Get a new meme Image"
          onClick={getRandomImage}
        >
          Get a new meme Image
        </button>
      </div>
      <div className="meme">
        <p className="meme-text top">{meme.topText}</p>
        <img className="meme-image" src={meme.randomImage} />
        <p className="meme-text bottom">{meme.bottomText}</p>
      </div>
    </main>
  );
}
