// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = isDarkTheme ? 'main-dark-bg' : ''
      return (
        <div className="all-components-page-bg">
          <Navbar />
          <div className={`main-bg ${darkTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="big-image-style"
            />
            <h1 className="main-dark-bg">Lost Your Way!</h1>
            <p className="main-dark-bg">We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
