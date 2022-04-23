import "./Artwork.css";

const Artwork = (props) => {
  const onImageClickHandler = (event) => {
    props.onArtworkClick(props.id);
  };

  const onAuthorClickHandler = (event) => {
    props.onArtistClick(props.authorId);
  };

  return (
    <div key={props.id} className="artwork">
      <div className="imageboard" id="container">
        <div>
          <img
            className="image"
            src={props.source}
            alt="artwork"
            onClick={onImageClickHandler}
          />
          <span className="name">
            <small>{props.name.toUpperCase()}</small>
          </span>
        </div>
        <span className="author" onClick={onAuthorClickHandler}>
          <small>{props.author.toUpperCase()}</small>
        </span>
      </div>
    </div>
  );
};

export default Artwork;
