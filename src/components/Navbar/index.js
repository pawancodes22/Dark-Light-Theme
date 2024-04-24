// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navDarkBg = isDarkTheme ? 'nav-dark' : ''
      return (
        <div className={`nav-bg ${navDarkBg}`}>
          {!isDarkTheme && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="nav-img-style"
            />
          )}
          {isDarkTheme && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="nav-img-style"
            />
          )}
          <ul className="nav-buttons-container">
            <li>
              <Link to="/" className={`nav-link-style ${navDarkBg}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link-style ${navDarkBg}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="button-bg-remove"
            onClick={toggleTheme}
            data-testid="theme"
          >
            {!isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="nav-img-style"
              />
            )}
            {isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="nav-img-style"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
