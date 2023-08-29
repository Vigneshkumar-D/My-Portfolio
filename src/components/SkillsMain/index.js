import { Link } from 'react-router-dom'
import './index.css'

const SkillsMain = () =>(
        <div className='skills-main-container'>
        <img src='https://res.cloudinary.com/da7ik4khq/image/upload/v1693213137/Mini%20Project/219347-P0VB16-493_onkkhr.jpg' className="under-const" alt="under-construction-pic"/>
        <h1 className='under-const-titlr'>This page is under construction</h1>
        <Link to="/">
                <button className='back-to-home-btn' type='button'>Back to Home</button>
        </Link>
        </div>
)
export default SkillsMain