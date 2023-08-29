import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

import {
    ProjectItemContainer,
    ProjectTitle,
    ProjectImg
} from './styledComponents'

const ProjectsCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,      
        autoplaySpeed: 3000,

    };
    
    return (
       <div className='carousel-main-container'>
        <Slider className='carousel-container' {...settings}>
            <a target='_blank' rel="noreferrer" className='project-link' href='https://nxtwatchvignesh.ccbp.tech/' >
                <ProjectItemContainer>                
                        <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692347845/Portfolio/Projects/Screenshot_1412_ikksz4.png" alt="Project Pic" />
                        <ProjectTitle>NxtWatch App</ProjectTitle>
                </ProjectItemContainer>
            </a>
            <a target='_blank' rel="noreferrer" className='project-link' href='https://mynxttrendzz.ccbp.tech/' >
                <ProjectItemContainer>
                        <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692348340/Portfolio/Projects/Screenshot_1413_jm4ajl.png" alt="Project Pic" />                        
                        <ProjectTitle>NxtTrendz App</ProjectTitle>
                </ProjectItemContainer>
            </a>
            <a target='_blank' rel="noreferrer" className='project-link' href='https://myjobbiapp.ccbp.tech/' >
                <ProjectItemContainer>
                        <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692344674/Portfolio/Projects/Screenshot_1411_lzcedl.png" alt="Project Pic" />
                        <ProjectTitle>Jobby App</ProjectTitle>
                </ProjectItemContainer>
            </a>
            <a target='_blank' rel="noreferrer" className='project-link' href='https://myebookhub.ccbp.tech/' >
                <ProjectItemContainer>
                        <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1693233774/Portfolio/Projects/Screenshot_1421_vxu6g3.png" alt="Project Pic" />
                        <ProjectTitle>Book Hub</ProjectTitle>
                </ProjectItemContainer>
            </a>
        </Slider>
        </div>
);
}
export default ProjectsCarousel