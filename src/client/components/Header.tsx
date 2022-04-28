import React from "react";

const Header = () => {
  return (
    <>
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            Talk
          </a>
          <button type="button" className="btn btn-success">
            Quit
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
