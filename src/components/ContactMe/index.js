import {
    ContactMeContainer,
    ContactMeHeading,
    ContactMeLeftContainer,
    ContactDetailsContainer,
    MobileImage,
    MobileNumber,
    EmailImage,
    Email,
    LocationImage,
    LocationDetails,
    ContactMeRightContainer
} from './styledComponents'

const ContactMe = () => {

    return(
        <ContactMeContainer>
            <ContactMeHeading>Contact</ContactMeHeading>
            <ContactMeLeftContainer>
                <ContactDetailsContainer>
                    <MobileImage src="" alt="mobile num image" />
                    <MobileNumber>+91-9944552305</MobileNumber>
                </ContactDetailsContainer>
                <ContactDetailsContainer>
                    <EmailImage src="" alt="mobile num image" />
                    <Email>+91-9944552305</Email>
                </ContactDetailsContainer>
                <ContactDetailsContainer>
                    <LocationImage src="" alt="mobile num image" />
                    <LocationDetails>+91-9944552305</LocationDetails>
                </ContactDetailsContainer>
            </ContactMeLeftContainer>
            <ContactMeRightContainer>

            </ContactMeRightContainer>
        </ContactMeContainer>
    )

}
export default ContactMe