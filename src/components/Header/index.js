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
                <Link className="link" to="/" style={{'paddingTop': '1%'}} smooth={true} duration={500}>
                {/* <AppLogo src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691685054/4124842_cktgwk.jpg" alt="App Logo" /> */}
                    <AppLogo src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691336665/Portfolio/portfolio-paper-poster-with-colorful-brush-strokes-vector-21849131_ebw1q7.jpg" alt="App Logo" />
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