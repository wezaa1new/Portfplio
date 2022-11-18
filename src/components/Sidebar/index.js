import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import NLogo from '../../assets/images/N-Letter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faUser,
  
  faBook} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className='logo'>
      <img src={NLogo} alt="logo" />
      
    </Link>
    <nav>
      <NavLink 
        exact="true" 
        activeclassname="active"
         to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      
      <NavLink
        exact="true"
        activeclassname="active"
        className="learn-link"
        to="/education"
      >
        <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a  href="https://github.com/wezaa1new"
            target="_blank"
            rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a  href="https://www.instagram.com/new_chanasorn/"
            target="_blank"
            rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a  href="https://www.facebook.com/profile.php?id=100009493626458"
            target="_blank"
            rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
