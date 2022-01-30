import React from "react";
import "./rickan.css";

interface Props {
  date: any;
}
const RickanDetails: React.FC<Props> = ({ date }) => {
  return (
    <div className="card">
      <img
        src={
          date
            ? date.image
            : "https://css.cua.edu/wp-content/uploads/2018/06/avatar-1577909_960_720.jpg"
        }
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <h4>
        <b>{date ? date.name : "name"}</b>
      </h4>
      <div className="container">
        <h6>
          -Gender: <span>{date ? date.gender : "gender"}</span>
        </h6>
        <h6>
          -Origin: <span>{date ? date.origin.name : "origin"}</span>
        </h6>
        <h6>
          -Location: <span>{date ? date.location.name : "location"}</span>
        </h6>
        <h6>
          -Number of episodes: <span>{date ? date.episode.length : "0"}</span>
        </h6>
      </div>
    </div>
  );
};

export default RickanDetails;
