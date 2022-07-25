import React, { useState } from "react";

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggleDarkMode(e) {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={toggleDarkMode}>{buttonText}</button>
    </header>
  );
}

export default Header;
