import { Component } from 'react';
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
    Anchor,
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
                <NameAndImgContainer>
                    <NameContainer>
                        <WelcomeTitle>Hi, I'm</WelcomeTitle>
                        
                        <Designation>Full-Stack Developer</Designation>
                        <DesignationDescription>
                            A versatile developer proficient in both front-end and back-end technologies. 
                            Skilled in building responsive interfaces using React, 
                            and developing server-side applications with Node.js, Express, and databases like SQL. 
                            Dedicated to delivering high-quality code and staying updated with the latest web development trends.
                        </DesignationDescription>
                        <ViewProjectButton>
                            <Anchor href='https://drive.google.com/file/d/1T7jUlBaVIvTVq8KFOuCx_0qEpwtqeHQQ/view?usp=sharing' target="_blank">
                                View My Resume
                            </Anchor>
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
                <AboutMe />
                    <Projects />
                <Skills />
            </HomeSubContainer> 
            <Footer />   
        </HomeContainer>
        )
        
    }
}
export  default Home