import React, { useState } from "react";
import CityForm from "./components/CityForm";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("Paris");
  return (
    <>
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <Weather city={city} />
      <CityForm setCity={setCity} />
    </div>
      <p clasName="text-center" style={{ fontSize: "0.5rem", position: "fixed", bottom: "0", right: "10%" }}>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
  </>
  );
}

export default App;
