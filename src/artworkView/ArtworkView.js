import { Fragment } from "react";
import "./ArtworkView.css";

const ArtworkView = (props) => {
  return (
    <div key={props.artwork.id} className="artwork">
      <div className="imageboard" id="container">
        <div>
          <img className="image" src={props.artwork.imgSource} alt="artwork" />
          <span className="name">
            <p>{props.artwork.name}</p>
          </span>
        </div>
        <span className="author">
          <p>{props.artist.name.toUpperCase()}</p>
        </span>
      </div>
    </div>
  );
};

export default ArtworkView;
