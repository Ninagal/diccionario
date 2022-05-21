import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
                </div>
            );
          })}
        </div>
    );
  } else {
    return null;
  }
}
