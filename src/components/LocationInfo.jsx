import React from "react";

const Location = ({ location }) => {
  return (
    <div className="location">
      <h2 className="location__title">{location?.name}</h2>
      <ul className="location__info">
        <li className="location__element">
          <span>type </span>
          {location?.type}
        </li>
        <li className="location__element">
          <span>dimension </span>
          {location?.dimension}
        </li>
        <li className="location__element">
          <span>population </span>
          {location?.residents.length}
        </li>
      </ul>
    </div>
  );
};

export default Location;
