import Artwork from "./Artwork";
import "./ArtworkList.css";

const ArtworkList = (props) => {
  return (
    <div className="grid-container">
      {props.artworks.map((artwork) => (
        <Artwork
          key={artwork.id}
          name={artwork.name}
          source={artwork.source}
          author={artwork.author}
        />
      ))}
    </div>
  );
};

export default ArtworkList;
