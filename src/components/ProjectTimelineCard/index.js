// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'
// import { Link } from 'react-router-dom'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-Timeline-card-bg-container">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="sub-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      {/* <Link className="project-link-text" href={`${projectUrl}`}>
      {/* <button className='project-visit-button' type='button'> */}
      {/* </button> */}
      {/* </Link> */}
      {/* <Link to={projectUrl}>Visit</Link> */}
      <a className="project-link-text" target="_blank" rel="noreferrer" href={projectUrl}>
        Visit
      </a>
      
    </div>
  )
}
export default ProjectTimelineCard
