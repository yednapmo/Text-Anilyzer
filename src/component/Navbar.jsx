import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.navHeading1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.navHeading2}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    navHeading1:PropTypes.string,
    navHeading2:PropTypes.string
};

Navbar.defaultProps = {
    title: 'Text Analyzer',
    navHeading1:'Home',
    navHeading2:'About'

  };

export default Navbar