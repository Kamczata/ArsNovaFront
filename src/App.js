import "./App.css";
import ArtworkList from "./artworks/ArtworkList";
import torreador from "./picasso-toreador.jpg";
import cmentarz from "./cmentarz.jpg";
import noce from "./noce.jpg";
import logo from "./logo.jpg";
import background from "./background.png";

function App() {
  const artworkList = [
    {
      author: "Jacek Sroka",
      source: cmentarz,
      name: "Cmentarz masoński z cyprysami",
    },
    {
      author: "Pablo Picasso",
      source: torreador,
      name: "Torreador",
    },

    {
      author: "Jacek Sroka",
      source: noce,
      name: "Noce paryskie",
    },
    {
      author: "Pablo Picasso",
      source: torreador,
      name: "Torreador",
    },
    {
      author: "Jacek Sroka",
      source: cmentarz,
      name: "Cmentarz masoński z cyprysami",
    },
    {
      author: "Jacek Sroka",
      source: cmentarz,
      name: "Cmentarz masoński z cyprysami",
    },
    {
      author: "Pablo Picasso",
      source: torreador,
      name: "Torreador",
    },
    {
      author: "Jacek Sroka",
      source: noce,
      name: "Noce paryskie",
    },
  ];

  return (
    <div className="App" >
      <header className="App-header">
        {/* <h1 className="title">Ars Nova</h1> */}
        <img className="App-logo" src={logo} alt="logo"></img>
      </header>
      <div className="body" style={{ backgroundImage: `url(${background})`}}>
      <ArtworkList artworks={artworkList} />
      </div>
    </div>
  );
}

export default App;
