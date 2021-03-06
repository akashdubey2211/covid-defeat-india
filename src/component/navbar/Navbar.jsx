import React from 'react'
import "./navbar.css"
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-11 mx-auto">

      
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><AcUnitIcon className="icons" /><span className="logo">DEFEAT-COVID</span><AcUnitIcon className="icons" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/report" activeClassName="active_class" exact>Cases</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/slot" activeClassName="active_class" >Slots Booking</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/instruction"  activeClassName="active_class">FAQ</NavLink>
      </li>
      {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#"></a>
      </li> */}
   </ul>
    </div>
  </div>
</nav>
</div>
        </div>
        </div>
        </div>
    )
}

export default Navbar;
