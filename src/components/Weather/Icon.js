import React from "react";

const Icon = ({ iconId }) => {
  return (
    !!iconId && (
      <img
        src={`http://openweathermap.org/img/wn/${iconId}@4x.png`}
        alt=""
        width="100"
        height="100"
      />
    )
  );
};

export default Icon;
