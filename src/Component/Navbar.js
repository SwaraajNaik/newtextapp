import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
     
     {/* <nav className='className="d-flex flex-column align-items-start p-3"'> */}
  <div className="container-fluid">
    <a className="navbar-brand" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item" >Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" >Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch text-light">
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label-dark" htmlfor="flexSwitchCheckDefault" >{props.modetext}</label>
</div>
    </div>
  </div>
</nav>

    </>
  )
}

Navbar.propTypes = 
{
    title:PropTypes.string
}
