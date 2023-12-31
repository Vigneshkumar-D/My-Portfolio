import {Chrono} from 'react-chrono'
import Header from '../Header'
import Footer from '../Footer'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {
    ProjectsMainContainer,
    ProjectsMainTopContainer,
    ProjectsMainHeading,
    ProjectsMainBottomContainer
} from './styledComponents'
import './index.css'

const timelineItemsList = [
    {
      id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
      categoryId: 'PROJECT',
      title: 'AUGUST 2023',
      projectTitle: 'Book Hub',
      description:
        'Book Hub is an innovative online platform that connects book enthusiasts with a vast collection of literary works. Users can explore, rate, and review books, fostering a vibrant community around shared reading experiences.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693233774/Portfolio/Projects/Screenshot_1421_vxu6g3.png',
      duration: '3 Days',
      projectUrl: 'https://myebookhub.ccbp.tech/',
    },
    {
      id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
      categoryId: 'PROJECT',
      title: 'JANUARY 2023',
      projectTitle: 'Nxt Watch App',
      description: 'Created Nxt Watch, a YouTube replica, allowing users to authenticate, browse Trending, Gaming, and Saved videos, search, and switch themes. Utilized React components, JWT tokens, and protected routes for a seamless and secure experience.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1692347845/Portfolio/Projects/Screenshot_1412_ikksz4.png',
      duration: '3 Days',
      projectUrl: 'https://nxtwatchvignesh.ccbp.tech/',
    },
  
    {
      id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
      categoryId: 'PROJECT',
      title: 'DECEMBER 2022',
      projectTitle: 'Nxt Trendz App',
      description:
        'Crafted Nxt Trendz - an Amazon/Flipkart inspired ECommerce clone. Users can log in, explore products with search, filters, and sorting. Leveraged React Router for smooth navigation, integrated JWT-based authentication, and maintained user login state via local storage.',
      imageUrl:
        'https://res.cloudinary.com/da7ik4khq/image/upload/v1692348340/Portfolio/Projects/Screenshot_1413_jm4ajl.png',
      duration: '2 Days',
      projectUrl: 'https://mynxttrendzz.ccbp.tech/',
    },
    {
      id: '0a35abbe-22ca-40a1-81da-613f656b7702',
      categoryId: 'PROJECT',
      title: 'DECEMBER 2022',
      projectTitle: 'Jobby App',
      description:
        'Developed Jobby App, a streamlined job search platform offering users the ability to browse listings, apply filters, and access detailed job information. Utilized React components, state management, and API integration to create seamless user experiences. Implemented user authentication with JWT tokens stored in local storage for secure access to personalized features.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1692344674/Portfolio/Projects/Screenshot_1411_lzcedl.png',
      duration: '2 Days',
      projectUrl: 'https://myjobbiapp.ccbp.tech/',
    },
  
    {
      id: '7bc3f006-f0f1-4574-924b-17c480556727',
      categoryId: 'PROJECT',
      title: 'JULY 2023',
      projectTitle: 'SalesCaptain',
      description:
        'Created the Sales Caption frontend project, a powerful static platform for sales activities. With a user-friendly interface, it enables efficient lead tracking, analytics, and data visualization. Leveraged React for seamless UI components, ensuring easy navigation and interaction.',
      imageUrl:
        'https://res.cloudinary.com/da7ik4khq/image/upload/v1692347842/Portfolio/Projects/Screenshot_1414_ortnj8.png',
      duration: '1 Day',
      projectUrl: 'https://salescaptain.ccbp.tech/',
    },
  
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'SEPTEMBER 2022',
      projectTitle: 'Food Munch',
      description:
        'Developed FoodMunch, a static frontend project tailored for food enthusiasts. This platform offers an immersive experience, showcasing diverse cuisines and recipes. The project provides a visually appealing and informative hub for culinary exploration.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1692344698/Portfolio/Projects/Screenshot_1415_ltwgq0.png',
      duration: '6 hrs',
      projectUrl: 'https://foodmunvignesh.ccbp.tech/',
    },
    {
      id: '7bc3f006-f0f1-4574-924b-17c480556727',
      categoryId: 'PROJECT',
      title: 'AUGUST 2023',
      projectTitle: 'Board',
      description:
        'Crafted a Board app focused on data visualization, employing pie and line charts. Through React components, users can create, customize, and analyze data presentations. Seamlessly integrating chart libraries, the app provides insightful visualizations for better data comprehension. This project enhances data-driven decision-making through engaging and informative visual representations.',
      imageUrl:
        'https://res.cloudinary.com/da7ik4khq/image/upload/v1693282600/Portfolio/Projects/Screenshot_1422_xbtccy.png',
      duration: '14 Hrs',
      projectUrl: '',
    },
  
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'DECEMBER 2022',
      projectTitle: 'Money Manager',
      description:
        'Developed Money Manager, a frontend project enabling effortless financial tracking and budgeting. Leveraged React to design interactive UI components for user-friendly experience. The project provides a practical tool for effective money management.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693282600/Portfolio/Projects/Screenshot_1423_wot9vq.png',
      duration: '3 hrs',
      projectUrl: 'https://foodmunvignesh.ccbp.tech/',
    },
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'DECEMBER 2022',
      projectTitle: 'Twitter Clone(Backend)',
      description:
        'Created the backend for a Twitter Clone, enabling users to engage with posts and follow others. Implemented server-side logic for user authentication, post handling, and social interactions. Designed APIs for posting tweets, following users, and accessing timelines. This backend works seamlessly, offering a social media platform with essential functionalities akin to Twitter.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693309251/Portfolio/Projects/4902917_s0lt9l.jpg',
      duration: '4 hrs',
      projectUrl: 'https://github.com/Vigneshkumar-D/Twitter-Application.git',
    },
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'MARCH 2023',
      projectTitle: 'Music Library App(Backend)',
      description:
        'Developed the backend for a Music Library App, enabling efficient management and organization of music content. Leveraged server-side technologies to handle data storage, retrieval, and user interactions. Implemented robust APIs for functions like adding, searching, and categorizing tracks. The backend ensures seamless integration with the frontend, providing a comprehensive solution for music enthusiasts to manage their collection effectively.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693309154/Portfolio/Projects/2208.i602.010.S.m009.c12.audio_books_flat_illustration_n1zzsf.jpg',
      duration: '3 hrs',
      projectUrl: 'https://github.com/Vigneshkumar-D/Music-Library-3-Spring-Boot.git',
    },
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'MARCH 2023',
      projectTitle: 'Recipe Book(Backend)',
      description:
        'Developed Money Manager, a frontend project enabling effortless financial tracking and budgeting. Leveraged React to design interactive UI components for user-friendly experience. The project provides a practical tool for effective money management.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693310582/Portfolio/Projects/man-chef-standing-near-cake-recipe-cook-book_82574-9745_mbz50j.avif',
      duration: '3 hrs',
      projectUrl: 'https://github.com/Vigneshkumar-D/Recipe-Book-Spring-Boot.git',
    },
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: 'AUGUST 2023',
      projectTitle: 'Equity Data Automation Analysis',
      description: 'This project aims to automate the process of downloading daily Bhav Copy files for equity data from the BSE India website, specifically for the month of July 2023. The collected data will be organized and stored in a SQL database, enabling efficient analysis and querying. Additionally, the project will focus on optimizing query response times for enhanced performance.',
      imageUrl: 'https://res.cloudinary.com/da7ik4khq/image/upload/v1693311422/Portfolio/Projects/4905827_cqyeii.jpg',
      duration: '2 Days',
      projectUrl: 'https://github.com/Vigneshkumar-D/equity-data-automation-analysis',
    },
  ]

const ProjectsMain = () => {
    
    return(
        <ProjectsMainContainer>
            <Header />
            <ProjectsMainTopContainer>
                <ProjectsMainHeading>My Projects</ProjectsMainHeading>
            </ProjectsMainTopContainer>
            <ProjectsMainBottomContainer>
                <div className="time-line-container-bg-container">
                    <h1 className="my-journey-title">
                        My Projects
                    </h1>
                    <div className="chrono-container">
                        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
                            {timelineItemsList.map(eachItem => <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />)}
                        </Chrono>
                    </div>
                </div>
            </ProjectsMainBottomContainer>
            <Footer />
        </ProjectsMainContainer>
    )

}
export default ProjectsMain
