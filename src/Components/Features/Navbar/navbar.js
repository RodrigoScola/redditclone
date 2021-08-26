import React, { useRef } from "react";
import "./navbar.css";
import simpleLogo from "../../../images/simpleLogo.png";

export const Navbar = ({ getSearchResults, title, setTitle }) => {
  const inputRef = useRef();
  return (
    <nav className="navbar">
      <img className="redditLogo" src={simpleLogo} />
      {/* house svg */}
      <svg
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-house"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
        />
      </svg>
      <form onSubmit={getSearchResults}>
        <label for="searchBar">
          {/* searchbar svg */}
          <svg
            onClick={() => {
              inputRef.current.focus();
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </label>

        {/* addSearchIcon && animation*/}
        <input
          ref={inputRef}
          id="searchBar"
          placeholder="search something"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </form>
    </nav>
  );
};
