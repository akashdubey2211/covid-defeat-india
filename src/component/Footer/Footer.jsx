import React from 'react'
import './footer.css'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    return (
        <div>
           <footer>
  <div class="content">
    <div class="top">
      <div class="logo-details">
      <NavLink className="navbar-brand" to="/"><AcUnitIcon className="icons" /><span >DEFEAT-COVID</span><AcUnitIcon className="icons" /></NavLink>
      </div>
      <div class="media-icons">
        <a href="https://github.com/akashdubey2211"><GitHubIcon /></a>
        <a href="https://twitter.com/AkashDu72477790?s=08"><TwitterIcon/></a>
     
        <a href="https://www.linkedin.com/in/akash-dubey-1040791a7/"><LinkedInIcon /></a>
     
      </div>
    </div>
   
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Open Source and Feel free to add something. Developed by me:)</span>
      <span class="policy_terms">
        <a href="/">Privacy policy</a>
        <a href="/">Terms & condition</a>
      </span>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Footer
