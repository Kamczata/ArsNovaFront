import "./App.css";
import ArtworkList from "./artworks/ArtworkList";
// import torreador from "./picasso-toreador.jpg";
// import cmentarz from "./cmentarz.jpg";
// import noce from "./noce.jpg";
import logo from "./logo.jpg";
import background from "./background.png";
import Categories from "./components/Categories";
import React, { useState } from "react";

function App() {
  const [artworks, setArtworks] = useState([]);

  const categoriesList = [
    { name: "Malarstwo" },
    { name: "Grafika" },
    { name: "Rzeźba" },
    { name: "Rysunek" },
  ];

  function loadArtworks() {
    fetch("http://localhost:5000/api/Artwork/All?PageNumber=1&PageSize=2")
      .then((response) => response.json())
      .then((data) => console.log(data));

    //   const artworkObjects = data.results.map((artwork) => {
    //     return {
    //       id: artwork.id,
    //       author: "ktokolwiek",
    //       source: artwork.imgSource,
    //       name: artwork.name,
    //     };
    //   });
    //   setArtworks(artworkObjects);
  }

  React.useEffect(() => {
    loadArtworks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="title">Ars Nova</h1> */}
        <img className="App-logo" src={logo} alt="logo"></img>
      </header>
      {/* <button onClick={fetchArtworksHandler}>Fetch data</button> */}
      <Categories categories={categoriesList} />
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        {/* <ArtworkList artworks={artworks} /> */}
      </div>
    </div>
  );
}

export default App;
