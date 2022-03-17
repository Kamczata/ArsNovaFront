import "./Artwork.css"

const Artwork = (props) => {

  return (
    <div className="artwork">
      <div className="imageboard">
      <img className="image" src={props.source} alt="artwork"/>
      <p className="title">{props.name}</p>
      <p>{props.author}</p>
      </div>
    </div>
  );
};

export default Artwork;
