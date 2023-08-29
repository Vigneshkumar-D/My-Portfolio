import { Link } from 'react-router-dom';
import {
    HeaderContainer, 
    AppLogo,
    NavContainer,
    Home,
    AboutMe,
    Projects,
    Skills,
    ContactMe
} from './styledComponents'
import './index.css'

const Header = () =>{

    const getActivePage = (pathname) => {
        console.log(pathname)
        if (pathname === '/') {
          return 'home';
        } else if (pathname === '/about-me') {
          return 'about-me';
        } else if (pathname === '/projects') {
          return 'projects';
        } else if (pathname === '/skills') {
          return 'skills';
        } else if (pathname === '/contact-me') {
          return 'contact-me';
        }
        return '';
      };
    
      const currentPage = getActivePage(window.location.pathname);

        return(
            <HeaderContainer>
                <Link className="link" to="/" smooth={true} duration={500}>
                    <AppLogo src="https://res.cloudinary.com/da7ik4khq/image/upload/v1693301237/Portfolio/1000_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVa_cifwnq.jpg" alt="App Logo" />
                </Link>
                <NavContainer>
                    <Link className='link' to="/">
                        <Home className={`${currentPage === 'home' ? 'active-page' : ''}`}>Home</Home>
                    </Link>
                    <Link className="link" to="/about-me">
                        <AboutMe className={`${currentPage === 'about-me' ? 'active-page' : ''}`}>About Me</AboutMe>
                    </Link>
                    <Link className="link" to="/projects">
                        <Projects  className={`${currentPage === 'projects' ? 'active-page' : ''}`}>Projects</Projects>
                    </Link>
                    <Link className="link" to="/skills">
                        <Skills className={`${currentPage === 'skills' ? 'active-page' : ''}`}>Skills</Skills>
                    </Link>
                    <Link className="link" to="/contact-me">
                        <ContactMe  className={`${currentPage === 'contact-me' ? 'active-page' : ''}`}>Contact Me</ContactMe>
                    </Link>
                </NavContainer>
            </HeaderContainer>
       
    )
    }
export default Header