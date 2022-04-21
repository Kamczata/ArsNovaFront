import "./Artwork.css";

const Artwork = (props) => {
  return (
    <div key={props.id} className="artwork">
      <div className="imageboard" id="container">
        <div>
          <img className="image" src={props.source} alt="artwork" />
          <span className="name">
            <small>{props.name.toUpperCase()}</small>
          </span>
        </div>
        <span className="author">
            <small>{props.author.toUpperCase()}</small>
          </span>
      </div>
    </div>
  );
};

export default Artwork;
