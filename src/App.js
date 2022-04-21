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
  const startLink =
    "http://localhost:5000/api/Artwork/All?PageNumber=1&PageSize=15";
  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artorksAPI, setArtworksAPI] = useState(startLink);

  function loadCategories() {
    fetch("http://localhost:5000/api/Category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  function loadArtworks() {
    fetch(artorksAPI)
      .then((response) => response.json())
      .then((data) => {
        const artworkObjects = data.map((artwork) => {
          return {
            id: artwork.id,
            author: artwork.artist.name,
            source: artwork.imgSource,
            name: artwork.name,
          };
        });
        setArtworks(artworkObjects);
      });
  }

  function onCategoryClickHandler(categoryId) {
    const link = `http://localhost:5000/api/Artwork/Artwork/Category/${categoryId}?PageNumber=1&PageSize=15`;
    setArtworksAPI(link);
  }

  const onLogoClickHandler = () => {
    setArtworksAPI(startLink);
  };

  React.useEffect(() => {
    loadArtworks();
    loadCategories();
  }, [artorksAPI]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="title">Ars Nova</h1> */}
        <div onClick={onLogoClickHandler}>
          <img className="App-logo" src={logo} alt="logo" />
        </div>
      </header>
      <Categories
        categories={categories}
        onCategoryClick={onCategoryClickHandler}
      />
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        <ArtworkList artworks={artworks} />
      </div>
    </div>
  );
}

export default App;
