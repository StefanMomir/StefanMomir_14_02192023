import React from "react";
import Nav from "./Nav.jsx";
const header = () => {
  return (
    <header>
      <div className="logo">
        <picture>
          <source type="image/webp" srcSet="logo.webp" />
          <img src="logo.jpg" alt="logo" />
        </picture>
      </div>
      <Nav />
    </header>
  );
};

export default header;
