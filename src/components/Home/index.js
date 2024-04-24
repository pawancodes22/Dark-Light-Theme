// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = isDarkTheme ? 'main-dark-bg' : ''
      return (
        <div className="all-components-page-bg">
          <Navbar />
          <div className={`main-bg ${darkTheme}`}>
            {!isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="big-image-style"
              />
            )}
            {isDarkTheme && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="big-image-style"
              />
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
