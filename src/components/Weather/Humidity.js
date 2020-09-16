import React from "react";
import "./humidity.css";

const Humidity = ({ humidity }) => {
  return (
    <>
      <p>
        <b>Humidité</b> {humidity}%
      </p>
      <div
        className="humidity"
        style={{ backgroundSize: `${humidity}% auto` }}
      />
    </>
  );
};

export default Humidity;
