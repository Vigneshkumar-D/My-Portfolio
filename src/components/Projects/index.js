import {
    ProjectsContainer,
    TopicContainer,
    ProjectsHeader,
    HorizontalLine,
    ProjectsTopSubContainer,
    ProjectsLeftContainer,
    CreativeWorkTitle,
    CreativeWorkDes,
    Span,
    ShowMoreButton,
    ProjectsRightContainer,
    ProjectImage,
    ProjectBottomContainer,
    ProjectBottomSubContainer,
    RecentWorkTitle
} from './styledComponents'
import ProjectsCarousel from '../ProjectsCarousel'
import { Link } from 'react-router-dom'

const Projects = () => {

    return(
        <ProjectsContainer>
            <TopicContainer>
                <HorizontalLine></HorizontalLine>
                    <ProjectsHeader>My Projects</ProjectsHeader>
                <HorizontalLine></HorizontalLine>
            </TopicContainer>
            <ProjectsTopSubContainer>
                <ProjectsLeftContainer>
                    {/* <CreativeWorkTitle>My Creative Works</CreativeWorkTitle> */}
                    <CreativeWorkTitle><Span>Latest Projects</Span> </CreativeWorkTitle>
                    <CreativeWorkDes>I have handpicked and listed a selection <br /> of my latest projects here for the purpose <br /> of sharing them with you.</CreativeWorkDes>
                </ProjectsLeftContainer>
                <ProjectsRightContainer>
                   <ProjectImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691423107/Portfolio/Screenshot_2023-08-07_211337_ji10ic.png" alt="Project Image" />
                </ProjectsRightContainer>
            </ProjectsTopSubContainer>
            <ProjectBottomContainer>
                <ProjectBottomSubContainer>
                        <RecentWorkTitle>My Latest Creations</RecentWorkTitle>
                        <Link to='/projects' style={{textDecoration: 'none'}}>
                        <ShowMoreButton>Show More</ShowMoreButton>
                        </Link>
                </ProjectBottomSubContainer>
                <ProjectsCarousel />
            </ProjectBottomContainer>
        </ProjectsContainer>

    )
}
export default Projects