import { Component } from 'react';
import { Link } from 'react-scroll';
import Header from '../Header'
import {
    HomeContainer,
    HomeSubContainer,
    NameAndImgContainer,
    NameContainer,
    WelcomeTitle,
    Designation,
    DesignationDescription,
    ImageContainer,
    ProfilePicture,
    ViewProjectButton,
    ViewProjectAnchor,
    ExperienceAndProjectsContainer,
    ExperienceContainer,
    ExperienceImage,
    ExpAndProTitle,
    TotalProjectsContainer,
    ProjectsImage,
    ExperienceSubContainer,
    TotalProjectsSubContainer,
    ExpAndProDes,
    AvailabilityContainer
} from './styledComponents'
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Skills from '../Skills';
import Footer from '../Footer';

class Home extends Component{
    state={}
    render(){
        return(
        <HomeContainer>
            <Header />
            <HomeSubContainer>
            {/* <section id="home"> */}
                <NameAndImgContainer>
                    <NameContainer>
                    {/* <WelcomeTitle>Hi, I'm</WelcomeTitle> */}
                        <WelcomeTitle>Welcome, I'm</WelcomeTitle>
                        
                        <Designation>Full-Stack Developer</Designation>
                        <DesignationDescription>
                            A versatile developer proficient in both front-end and back-end technologies. 
                            Skilled in building responsive interfaces using React, 
                            and developing server-side applications with Node.js, Express, and databases like SQL. 
                            Dedicated to delivering high-quality code and staying updated with the latest web development trends.
                        </DesignationDescription>
                        {/* <DesignationDescription>
                        As a enthusiastic developer, I have a strong problem-solving mindset and proficiency in programming languages 
                        like Java and Python. As a fresh developer, I excel in Java and Python programming. I enjoy solving problems and crafting 
                        efficient software solutions with high quality. I'm a team player, passionate about building robust and scalable applications. 
                        Continuously learning and seeking growth opportunities in my developer journey.
                        </DesignationDescription> */}
                        <ViewProjectButton>
                            <Link style={{width: '300px'}} to="projects" smooth={true} duration={500}>
                                <ViewProjectAnchor>
                                    View My Projects
                                </ViewProjectAnchor>
                            </Link> 
                        </ViewProjectButton>
                    </NameContainer>
                    <ImageContainer>
                        <ProfilePicture src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691345811/Portfolio/Screenshot_2023-08-06_234631_tv1pxi.png" alt="Profile Picture" />
                    </ImageContainer>
                </NameAndImgContainer>
            
                <ExperienceAndProjectsContainer>
                    <ExperienceContainer>
                        <ExperienceImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691332020/Portfolio/experiment_10434251_q0r7lk.png" alt="Experience Image" />
                        <ExperienceSubContainer>
                        <ExpAndProTitle>Experience</ExpAndProTitle>
                        <ExpAndProDes>Fresher</ExpAndProDes>
                        </ExperienceSubContainer>
                    </ExperienceContainer>
                    <TotalProjectsContainer>
                        <ProjectsImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691332020/Portfolio/creation_2974423_lo58dn.png" alt="Projects Image" />
                        <TotalProjectsSubContainer>
                            <ExpAndProTitle>30+ Projects</ExpAndProTitle>
                            <ExpAndProDes>Completed</ExpAndProDes>
                        </TotalProjectsSubContainer>
                    </TotalProjectsContainer>
                    <AvailabilityContainer>
                        <ProjectsImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691347628/Portfolio/activity_9320610_lsgdbr.png" alt="Time Image" />
                        <TotalProjectsSubContainer>
                            <ExpAndProTitle>Availability</ExpAndProTitle>
                            <ExpAndProDes>Immediate Joiner</ExpAndProDes>
                        </TotalProjectsSubContainer>
                    </AvailabilityContainer>
                </ExperienceAndProjectsContainer>
            {/* </section> */}
            {/* <section style={{width:'100%'}} id="aboutMe"> */}
                <AboutMe />
            {/* </section> */}
            <section style={{width:'100%'}} id="projects">
                <Projects />
            </section>
            {/* <section style={{width:'100%'}} id="skills"> */}
                <Skills />
            {/* </section> */}
            </HomeSubContainer> 
            <Footer />   
        </HomeContainer>
        )
        
    }
}
export  default Home