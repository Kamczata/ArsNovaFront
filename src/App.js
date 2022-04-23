import "./App.css";
import ArtworkView from "./artworkView/ArtworkView";
import ArtworkList from "./artworks/ArtworkList";
import logo from "./logo.jpg";
import background from "./background.png";
import Categories from "./components/Categories";
import React, { useState } from "react";
import ArtistView from "./artworks/ArtistView/ArtistView";

function App() {
  const startLink =
    "http://localhost:5000/api/Artwork/All?PageNumber=1&PageSize=15";
  const [artworks, setArtworks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [API, setAPI] = useState(startLink);
  const [view, setView] = useState("artworks");
  const [content, setContent] = useState([]);
  const [artist, setArtist] = useState([]);

  function loadCategories() {
    fetch("http://localhost:5000/api/Category")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  function loadArtworks() {
    fetch(API)
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

  function loadContent() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        setArtist({
          id: data.artist.id,
          name: data.artist.name,
        });
      });
  }

  function onCategoryClickHandler(categoryId) {
    const link = `http://localhost:5000/api/Artwork/Artwork/Category/${categoryId}?PageNumber=1&PageSize=15`;
    // setArtworksAPI(link);
    setAPI(link);
    setView("artworks");
  }

  const onArtworkClickHandler = (artworkId) => {
    const link = `http://localhost:5000/api/Artwork/Artwork/${artworkId}`;
    //setArtworkAPI(link);
    setAPI(link);
    setView("artworkDetailed");
  };

  const onArtistClickHandler = (artistId) => {
    const link = `http://localhost:5000/api/Artist/${artistId}`;
    //setArtistAPI(link);
    setAPI(link);
    setView("author");
  };

  const onLogoClickHandler = () => {
    //setArtworksAPI(startLink);
    setAPI(startLink);
    setView("artworks");
  };

  React.useEffect(() => {
    if (view === "artworks") {
      loadArtworks();
    } else {
      loadContent();
    }

    console.log(content);
    loadCategories();
  }, [API, view, content.id]);

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
        {view === "artworkDetailed" && (
          <ArtworkView artwork={content} artist={artist} />
        )}
        {view === "author" && <ArtistView artist={content} />}
      </div>
    </div>
  );
}

export default App;
