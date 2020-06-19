import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { handleThemeChange } = this.context;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li>The way of kings</li>
          <li>Demolition</li>
          <li>the final empire</li>
        </ul>
        <button
          onClick={handleThemeChange}
          style={{
            background: "skyblue",
            color: theme.syntax,
            border: "1px skyblue solid",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          change theme
        </button>
      </div>
    );
  }
}

export default BookList;
