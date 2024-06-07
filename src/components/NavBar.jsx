/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#!">
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
       />
        <a class="btn btn-primary" href="#" role="button">Sign Up</a>
      
       </div>
       </nav>



  );
}

export default NavBar;