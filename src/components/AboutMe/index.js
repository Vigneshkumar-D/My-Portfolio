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
    // SelfIntro,
    RoleMainContainer,
    RoleContainer,
    TickImage,
    Role,
    ButtonContainer,
    TechImage,
    // ShowMoreButton,
    // ViewResumeButton,
    Anchor
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
                    <Name>My name is Vigneshkumar D</Name>
                    {/* <SelfIntro> 
                        Hailing from Coimbatore. In 2019, I successfully attained a Bachelor's Degree in Computer Science and Engineering 
                        from Sree Sakthi Engineering College. Following my graduation, I embarked on a career in the banking sector while 
                        simultaneously preparing for Service Selection Board (SSB), which selects officers for 
                        the Indian Armed Forces. Unfortunately, due to the COVID outbreak, I didn't receive proper notifications for the 
                        SSB, leading me to consider a career transition into the thriving Tech industry, abundant with growth and 
                        opportunities.
                        To bolster my technical expertise, I made the decision to enroll in the NxtWave CCBP Intensive 4.0 program. 
                        This immersive program equipped me with skills in MERN full-stack development, and Java Backend, and allowed me to 
                        work on several noteworthy projects. My passion lies in utilizing my skills and dedication to improve the lives of 
                        others, and I am driven to make a positive impact through my work.
                    </SelfIntro> */}
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
                    {/* <ViewResumeButton type='button'> */}
                    <Anchor href='https://drive.google.com/file/d/1T7jUlBaVIvTVq8KFOuCx_0qEpwtqeHQQ/view?usp=sharing' target="_blank">
                            View My Resume
                        </Anchor>
                    {/* </ViewResumeButton> */}
                        <Link to="/about-me" className="know-more-link"> Know More
                            {/* <ShowMoreButton>Know More</ShowMoreButton> */}
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