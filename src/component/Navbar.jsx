import React from "react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Navbar({ title }) {
  return (
    <nav className="navbar shadow-lg bg-emerald-600 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <a href="/" className="text-lg font-bold align-middle">
            {title}
          </a>
        </div>
        <div className="flex-1 px-2 mx-2 ">
          <div className="flex justify-end space-x-3">
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
