import "./App.css";
import ArtworkView from "./artworkView/ArtworkView";
import ArtworkList from "./artworks/ArtworkList";
import logo from "./logo.jpg";
import background from "./background.png";
import Categories from "./components/Categories";
import React, { useState } from "react";

function App() {
  const startLink =
    "http://localhost:5000/api/Artwork/All?PageNumber=1&PageSize=15";
  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artworksAPI, setArtworksAPI] = useState(startLink);
  const [artistAPI, setArtistAPI] = useState("");
  const [artworkAPI, setArtworkAPI] = useState("");
  const [view, setView] = useState("artworks");

  function loadCategories() {
    fetch("http://localhost:5000/api/Category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  function loadArtworks() {
    fetch(artworksAPI)
      .then((response) => response.json())
      .then((data) => {
        const artworkObjects = data.map((artwork) => {
          return {
            id: artwork.id,
            author: artwork.artist.name,
            authorId: artwork.artist.id,
            source: artwork.imgSource,
            name: artwork.name,
          };
        });
        setArtworks(artworkObjects);
      });
  }

  function loadArtist() {
    fetch(artistAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function loadSingleArtwork() {
    fetch(artworkAPI)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function onCategoryClickHandler(categoryId) {
    const link = `http://localhost:5000/api/Artwork/Artwork/Category/${categoryId}?PageNumber=1&PageSize=15`;
    setArtworksAPI(link);
    setView("artworks");
  }

  const onArtworkClickHandler = (artworkId) => {
    const link = `http://localhost:5000/api/Artwork/Artwork/${artworkId}`;
    setArtworkAPI(link);
    setView("artworkDetailed");
  };

  const onArtistClickHandler = (artistId) => {
    const link = `http://localhost:5000/api/Artist/${artistId}`;
    setArtistAPI(link);
    loadArtist();
    setView("author");
  };

  const onLogoClickHandler = () => {
    setArtworksAPI(startLink);
    setView("artworks");
  };

  React.useEffect(() => {
    if (view === "artworks") {
      loadArtworks();
    } else if (view === "author") {
      loadArtist();
    } else if (view === "artworkDetailed") {
      loadSingleArtwork();
    }

    loadCategories();
  }, [artworkAPI, artistAPI, artworksAPI]);

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
        {view === "artworks" && (
          <ArtworkList
            artworks={artworks}
            onArtworkClick={onArtworkClickHandler}
            onArtistClick={onArtistClickHandler}
          />
        )}
        {view === "artworkDetailed" && <ArtworkView />}
      </div>
    </div>
  );
}

export default App;
