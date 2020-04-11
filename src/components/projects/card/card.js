import React from "react";
import './card-styles.css';

const Card = () => (
  <div className="card">
    <img src="https://www.mezzolab.com/ficheiros/workinfo/work_142.png" alt="qwill project" />
    <div className="card-content">
      <h2 className="card-content__title">Qwill</h2>
      <p className="card-content__resume">
        Qwill needed to make creating a will sound like fun.
        <br /> That's where we came in.
      </p>
    </div>
  </div>
);

export default Card;
