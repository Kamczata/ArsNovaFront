import Artwork from "./Artwork";
import "./ArtworkList.css";

const ArtworkList = (props) => {
  const onArtworkClickHandler = (artworkId) => {
    props.onArtworkClick(artworkId);
  };

  const onArtistClickHandler = (artistId) => {
    props.onArtistClick(artistId);
  };

  return (
    <div className="grid-container">
      {props.artworks.map((artwork) => (
        <Artwork
          key={artwork.id}
          id={artwork.id}
          name={artwork.name}
          source={artwork.source}
          author={artwork.author}
          authorId={artwork.authorId}
          onArtworkClick={onArtworkClickHandler}
          onArtistClick={onArtistClickHandler}
        />
      ))}
    </div>
  );
};

export default ArtworkList;
