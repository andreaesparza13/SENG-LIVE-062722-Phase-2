import React from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {

  // This is not really necessary right now since it's just one line of code, but will be useful when handling forms.
  function handleToggleDarkMode(e) {
    onToggleDarkMode();
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
