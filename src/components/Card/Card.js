import React from "react";

import "./card.styles.css";

export const Card = ({ robot }) => (
  <div className="card-container">
    <img
      alt="robot"
      src={`https://robohash.org/${robot.id}?set=set6&size=180x180`}
    />
    <h1>{robot.name}</h1>
    <p>{robot.email}</p>
  </div>
);
