import React from "react";

export default function Navbar(props){
    return(
        <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a  href="/" className="navbar-brand">{props.title}</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">Logout</button>
          </form>
        </div>
      </nav>
    )
}