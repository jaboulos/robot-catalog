import React from "react";
import { Card } from "../Card/Card";

import "./card-list.styles.css";

export const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};
