import {
    ProjectsContainer,
    TopicContainer,
    ProjectsHeader,
    HorizontalLine,
    CreativeWorkTitle,
    CreativeWorkDes,
    Span,
    ShowMoreButton,
    ProjectBottomContainer,
    ProjectBottomSubContainer,
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
            <ProjectBottomContainer>
                <ProjectBottomSubContainer>
                        
                    <CreativeWorkTitle><Span>Latest Projects</Span> </CreativeWorkTitle>
                    <CreativeWorkDes>I have handpicked and listed a selection of my latest projects here for the purpose of sharing them with you.</CreativeWorkDes>
                    <Link to='/projects' className="show-more-btn" style={{textDecoration: 'none'}}>
                        <ShowMoreButton>Show More</ShowMoreButton>
                    </Link>
                </ProjectBottomSubContainer>
                <ProjectsCarousel />
            </ProjectBottomContainer>
        </ProjectsContainer>

    )
}
export default Projects