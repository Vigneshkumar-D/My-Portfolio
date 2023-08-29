import {FooterContainer,
  FooterLogo,
     FooterContent,
     ContactInfo,
     SocialLinks,
     QuickLinks,
     FooterBottom
    } from './styledComponents'
import './index.css'


const Footer = () => {

    return(
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
            <img className='app-logo-footer' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1693301237/Portfolio/1000_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVa_cifwnq.jpg" alt="App Logo" />
        </FooterLogo>
        <SocialLinks>
        <h3 className='footer-titles'>Connect With Me</h3>
            <ul className='ul-list-social'>
                <li className='social-list-item'><a href="https://www.linkedin.com/in/vigneshkumard/" target="_blank" rel="noreferrer"><img className='social-icon linkedin-hover-bg' src='https://res.cloudinary.com/da7ik4khq/image/upload/v1692966971/Portfolio/social_10095480_kb5axl.png' alt="LinkedIn Pic"/></a></li>
                <li className='social-list-item'><a href="https://github.com/Vigneshkumar-D" target="_blank" rel="noreferrer"><img className='social-icon github-hover-bg' src='https://res.cloudinary.com/da7ik4khq/image/upload/v1692966971/Portfolio/social_10095458_ogx9l9.png' alt="GitHub Pic"/></a></li>
                <li className='social-list-item'><a href="https://twitter.com/DVigneshkum2797" target="_blank" rel="noreferrer"><img className='social-icon twitter-hover-bg' src='https://res.cloudinary.com/da7ik4khq/image/upload/v1692966971/Portfolio/social_10095578_mgczrq.png' alt="Twitter Pic"/></a></li>
                <li className='social-list-item'><a href="https://www.instagram.com/its_nomad__/" target="_blank" rel="noreferrer"><img className='social-icon instagram-hover-bg' src='https://res.cloudinary.com/da7ik4khq/image/upload/v1692966971/Portfolio/social_10095475_ex4nfu.png' alt="Instagram Pic"/></a></li>                
                <li className='social-list-item'><a href="https://facebook.com/" target="_blank" rel="noreferrer"><img className='social-icon facebook-hover-bg' src='https://res.cloudinary.com/da7ik4khq/image/upload/v1692966971/Portfolio/social_10095450_fht9fj.png' alt="FaceBook Pic"/></a></li>
            </ul>
        </SocialLinks>
        <QuickLinks>
            <h3 className='footer-titles'>Quick Links</h3>
            <ul className='quick-links-list'>
              <div className='quick-links-sub-container'>
                  <div className='gif-container'>
                    <img className='mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692975284/Portfolio/home_akx6uk.gif" alt="Home Pic"/>
                  </div>
                  <li className='quick-links-list-item'><a className='quick-links-list-item' href="/">Home</a></li>
              </div>
              <div className='quick-links-sub-container'>
                  <div className='gif-container'>
                    <img className='mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692977960/Portfolio/vlogger_c3evtx.gif" alt="About Pic"/>
                  </div>
                  <li className='quick-links-list-item'><a className='quick-links-list-item' href="/about-me">About Me</a></li>
              </div>
              <div className='quick-links-sub-container'>
                  <div className='gif-container'>
                    <img className='mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692975275/Portfolio/work_gsz5gw.gif" alt="Projects Pic"/>
                  </div>
                  <li className='quick-links-list-item'><a className='quick-links-list-item' href="/projects">Projects</a></li>
              </div>
              <div className='quick-links-sub-container'>
                  <div className='gif-container'>
                    <img className='mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692975270/Portfolio/skills_cmleut.gif" alt="Skills Pic"/>
                  </div>
                  <li className='quick-links-list-item'><a className='quick-links-list-item' href="/skills">Skills</a></li>
              </div>
              <div className='quick-links-sub-container'>
                  <div className='gif-container'>
                    <img className='mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692977821/Portfolio/add_ixzyqy.gif" alt="Contacts Pic"/>
                  </div>
                  <li className='quick-links-list-item'><a className='quick-links-list-item' href="/contact">Contact</a></li>
              </div>
          </ul>
        </QuickLinks>
        <ContactInfo>
          <h3 className='footer-titles'>Contact Me</h3>
          <div className='contact-sub-container'>
            <img className='contact-mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692973417/Portfolio/email_jvp4fq.gif" alt="Gmail Pic"/>
            <p className='contact-me-email'><a className='contact-me-email' href="mailto:vigneshkumar.d2797@gmail.com">vigneshkumar.d2797@gmail.com</a></p>
          </div>
          <div className='contact-sub-container'>
            <img className='contact-mail-gif' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692973929/Portfolio/calling_rjvpcv.gif" alt="Mobile Pic"/>
            <p className='contact-me-phone'><a className='contact-me-phone' href="tel:+91-9944552305">+91-9944552305</a></p>
          </div>
          <div className='contact-sub-container'>
            <img className='contact-mail-gif-whatsapp' src="https://res.cloudinary.com/da7ik4khq/image/upload/v1692989027/Portfolio/call_1_q8ezft.gif" alt="WhatsApp Pic"/>
            <p className='contact-me-phone'><a className='contact-me-phone' href="whatsapp://send?phone=919944552305">+91-9944552305</a></p>
          </div>

        </ContactInfo>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2023 Vigneshkumar D. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
    )
}
export default Footer