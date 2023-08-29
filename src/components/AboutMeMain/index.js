import Header from '../Header'
import Footer from '../Footer'
import {
    AboutMeMainContainer,
    AboutMeMainTopContainer,
    AboutMeMainTitle,
    AboutMeMainBottomController,
    AboutMeMainBottomSubController,
    Image,
    Heading,
    DescriptionContainer,
    Description
} from './styledComponents'

const AboutMeMain = () => {

    return(
        <AboutMeMainContainer>
            <Header />
            <AboutMeMainTopContainer>
                <AboutMeMainTitle>About Me</AboutMeMainTitle>
            </AboutMeMainTopContainer>
            <AboutMeMainBottomController>
                <AboutMeMainBottomSubController>
                    <Image style={{order:1}} src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692203042/Portfolio/About%20Me/rear-view-programmer-working-all-night-long-compressed_2_t8fwhe.jpg" alt="About me Image" />
                    <DescriptionContainer>            
                        <Heading>Hello!</Heading>
                        <Heading>My name is Vigneshkumar D.</Heading>
                    <Description>
                        I'm a Full Stack Developer, passionate about creating innovative and efficient solutions. With skill, 
                        techniques and a creative mind, I am always looking for new challenges and opportunities to improve my skills 
                        and help turn ideas
                        into reality. <br />
                        My development knowledge covers both front-end and back-end, allowing me to create complete and cohesive 
                        solutions for the most diverse projects. On the front-end, I master technologies such as HTML, CSS and JavaScript, 
                        in addition to the React framework.
                    </Description>
                    </DescriptionContainer>
                </AboutMeMainBottomSubController>
                <AboutMeMainBottomSubController>
                    <Image src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692208050/Portfolio/About%20Me/Screenshot_2023-08-16_231513_ponlsc.png" alt="About me Image" />
                <DescriptionContainer>
                        <Heading> I am a Full Stack Developer</Heading>
                    <Description>
                        This allows me to create intuitive, responsive and attractive user interfaces. 
                        On the backend, I have experience in some programming languages, such as Python, Java language, as well 
                        as the Spring Boot framework. I also have skills in relational databases such as SQLite. <br />
                        If you are looking for a motivated, dedicated and highly qualified Full Stack Developer to help drive your 
                        project or business forward, please do not hesitate to contact me. I look forward to collaborating with you 
                        and creating exceptional solutions together!
                        
                    </Description>
                    </DescriptionContainer>
                </AboutMeMainBottomSubController>
            </AboutMeMainBottomController>
            <Footer />
        </AboutMeMainContainer>
    )

}
export default AboutMeMain
