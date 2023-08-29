import {Link}from 'react-router-dom'
import {
    AboutMeContainer,
    AboutMeHeading,
    TopicContainer,
    HorizontalLine,
    AboutMeSubContainer,
    AboutMeLeftContainer,
    AboutMeRightContainer,
    Name,
    RoleMainContainer,
    RoleContainer,
    TickImage,
    Role,
    ButtonContainer,
    TechImage,
    ViewProjectButton,
    ShowMoreButton,
} from './styledComponents'
import './index.css'


const AboutMe = () => {

    return(
        <AboutMeContainer>
            <TopicContainer>
                <HorizontalLine></HorizontalLine>
                <AboutMeHeading>About Me</AboutMeHeading>
                <HorizontalLine></HorizontalLine>
            </TopicContainer>
            
            <AboutMeSubContainer>
                <AboutMeLeftContainer>
                    <Name>Hello!</Name>
                    <Name>I'm Vigneshkumar D</Name>
                    <RoleMainContainer>
                        <RoleContainer>
                            <TickImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691855624/Portfolio/check-mark_5290076_s52kkl.png" alt="Tick Image" />
                            <Role>Full-Stack Developer</Role>
                        </RoleContainer>
                        <RoleContainer>
                            <TickImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691855624/Portfolio/check-mark_5290076_s52kkl.png" alt="Tick Image" />
                            <Role>Frontend Developer</Role>
                        </RoleContainer>
                        <RoleContainer>
                            <TickImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691855624/Portfolio/check-mark_5290076_s52kkl.png" alt="Tick Image" />
                            <Role>Backend Developer</Role>
                        </RoleContainer>
                        <RoleContainer>
                            <TickImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691855624/Portfolio/check-mark_5290076_s52kkl.png" alt="Tick Image" />
                            <Role>Software Developer</Role>
                        </RoleContainer>
                    </RoleMainContainer>
                    
                    <ButtonContainer>                           
                        <Link  style={{width: '300px', textDecoration: 'none'}} to="projects" smooth={true} duration={500}>
                            <ViewProjectButton>
                                View My Projects
                            </ViewProjectButton>
                        </Link> 
                        <Link to="/about-me" className="know-more-link"> 
                            <ShowMoreButton>Know More</ShowMoreButton>
                        </Link>
                    </ButtonContainer> 
                </AboutMeLeftContainer>
                    
                <AboutMeRightContainer>
                <TechImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691420295/Portfolio/971_mceldl.jpg" slt="Tech Image" />
                </AboutMeRightContainer>
            </AboutMeSubContainer>
        </AboutMeContainer>
    )
}
export default AboutMe