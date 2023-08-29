import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

import {
    ProjectItemContainer,
    ProjectItemsLeftContainer,
    ProjectItemsRightContainer,
    ProjectTitle,
    ProjectDes,
    ProjectImg
} from './styledComponents'

const ProjectsCarousel = () => {
    
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,       // Enable auto-scrolling
        autoplaySpeed: 3000,

    };
    
    return (
    <div className='carousel-main-container'>
        <Slider className='carousel-container' {...settings}>
            <ProjectItemContainer>                
    
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692347845/Portfolio/Projects/Screenshot_1412_ikksz4.png" alt="Project Pic" />
                
                    <ProjectTitle>NxtWatch App</ProjectTitle>
                    
            </ProjectItemContainer>
        
            <ProjectItemContainer>
               
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692348340/Portfolio/Projects/Screenshot_1413_jm4ajl.png" alt="Project Pic" />
                
                    <ProjectTitle>NxtTrendz App</ProjectTitle>
                    
            </ProjectItemContainer>
        
            <ProjectItemContainer>
                
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692344674/Portfolio/Projects/Screenshot_1411_lzcedl.png" alt="Project Pic" />
                
                    <ProjectTitle>Jobby App</ProjectTitle>
                   
            </ProjectItemContainer>
            <ProjectItemContainer>
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1693233774/Portfolio/Projects/Screenshot_1421_vxu6g3.png" alt="Project Pic" />
                    <ProjectTitle>Book Hub</ProjectTitle>
            </ProjectItemContainer>
            
        
            {/* <ProjectItemContainer>
                
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692347842/Portfolio/Projects/Screenshot_1414_ortnj8.png" alt="Project Image" />
                
                    <ProjectTitle>SalesCaption</ProjectTitle>
                    
            </ProjectItemContainer>
       
            <ProjectItemContainer>           
               
                    <ProjectImg src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692344698/Portfolio/Projects/Screenshot_1415_ltwgq0.png" alt="Project Image" />
                    <ProjectTitle>Food Munch</ProjectTitle>
               
            </ProjectItemContainer>
         */}
        </Slider>
    </div>
    );
}
export default ProjectsCarousel