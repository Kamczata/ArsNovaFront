import { Fragment } from "react";
import "./ArtistView.css";

const ArtistView = (props) => {
  return (
    // <div key={props.artist.id} className="artwork">
    //   <div className="imageboard" id="container">
    //     <div>
    //       <img className="image" src={props.artist.imgSrc} alt="artwork" />
    //       <span className="name">{props.artist.name}</span>
    //     </div>
    //     <span className="author">{props.artist.description}</span>
    //   </div>
    // </div>
    <Fragment>
      <h1 className="author-name">{props.artist.name}</h1>
      <div className="image-board" id="container">
        <img className="image" src={props.artist.imgSrc} alt="artist" />
      </div>
      <h3 className="description">{props.artist.description}</h3>
    </Fragment>
  );
};

export default ArtistView;
