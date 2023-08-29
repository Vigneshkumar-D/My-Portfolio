import {
    SkillsContainer,
    TopicContainer,
    SkillTitle,
    HorizontalLine,
    SkillSubContaiiner,
    FrontEndContainer,
    FrontEndSubContainer,
    FrontEndTitle,
    FrontEndSkilsContainer,
    SkillImage,
    SkillName,
    BackEndContainer,
    BackEndSubContainer,
    BackEndTitle,
    BackEndSkilsContainer,
    OtherSkillsContainer,
    OtherSkillsTitle,
    OtherSkillsSubContainer,
    ProgrammingLanguage,
    DatabaseContainer
} from './styledComponents'

const Skills = () => {

    return(
        <SkillsContainer>
            <TopicContainer>
                <HorizontalLine></HorizontalLine>
                    <SkillTitle>Skills</SkillTitle>
                <HorizontalLine></HorizontalLine>
            </TopicContainer>
            
            <SkillSubContaiiner>
                <FrontEndContainer>
                    <FrontEndTitle>Frontend</FrontEndTitle>
                    <FrontEndSubContainer>
                        <FrontEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691432026/Portfolio/Skills/html-5_174854_ctatb9.png" alt="HTML" />
                            <SkillName>HTML</SkillName>
                        </FrontEndSkilsContainer>
                        <FrontEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691431528/Portfolio/Skills/css-3_732190_pyre1h.png" alt="CSS" />
                            <SkillName>CSS</SkillName>
                        </FrontEndSkilsContainer>
                        <FrontEndSkilsContainer>
                            <SkillImage  src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691824878/Portfolio/Skills/javascript-logo-transparent-logo-javascript-images-3_mu0hzg.png" alt="JavaScript" />
                            <SkillName>JavaScript</SkillName>
                        </FrontEndSkilsContainer>
                        <FrontEndSkilsContainer>
                            <SkillImage style={{height:'100px'}} src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691843720/Portfolio/Skills/bootstrap-logo-shadow-1_hdszuw.png" alt="Bootstrap" />
                            <SkillName>Bootstrap</SkillName>
                        </FrontEndSkilsContainer>
                        <FrontEndSkilsContainer>
                            <SkillImage style={{height:'115px'}} src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691432176/Portfolio/Skills/physics_1126012_t3ubrz.png" alt="React.Js" />
                            <SkillName>React.Js</SkillName>
                        </FrontEndSkilsContainer>
                    </FrontEndSubContainer>
                </FrontEndContainer>
                <BackEndContainer>
                <BackEndTitle>Backend</BackEndTitle>
                    <BackEndSubContainer>
                        <BackEndSkilsContainer>
                            <SkillImage style={{width: '90px'}} src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691824163/Portfolio/Skills/node-js-icon-454x512-nztofx17_b6vjrw.png" alt="Node.Js" />
                            <SkillName>Node.Js</SkillName>
                        </BackEndSkilsContainer>
                        <BackEndSkilsContainer>
                            <SkillImage style={{borderRadius:'50px'}} src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691823812/Portfolio/Skills/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo_u7ixos.png" alt="Express.Js" />
                            <SkillName>Express.Js</SkillName>
                        </BackEndSkilsContainer>
                        <BackEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691431555/Portfolio/Skills/java_226777_fsnvop.png" alt="Java" />
                            <SkillName>Java</SkillName>
                        </BackEndSkilsContainer>
                        <BackEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691824614/Portfolio/Skills/spring-boot-logo_ppcfhr.png" alt="Spring Boot" />
                            <SkillName>Spring Boot</SkillName>
                        </BackEndSkilsContainer>
                        <BackEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691824639/Portfolio/Skills/1100px_Hibernate_logo_01_a5l7zl.png" alt="Hibernate" />
                            <SkillName>Hibernate</SkillName>
                        </BackEndSkilsContainer>
                    </BackEndSubContainer>
                </BackEndContainer>
                <DatabaseContainer>
                    <FrontEndTitle>Database</FrontEndTitle>
                    <BackEndSubContainer>
                    <BackEndSkilsContainer>
                        <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691432183/Portfolio/Skills/Sqlite-square-icon.svg_dpun3t.png" alt="SQLite" />
                        <SkillName>SQLite</SkillName>
                    </BackEndSkilsContainer>
                    </BackEndSubContainer>
                </DatabaseContainer>

                <ProgrammingLanguage>
                    <FrontEndTitle>Programming Language</FrontEndTitle>
                    <BackEndSubContainer>
                        <BackEndSkilsContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691432335/Portfolio/Skills/snakes_381702_lnixgy.png" alt="Python" />
                            <SkillName>Python</SkillName>
                    </BackEndSkilsContainer>
                    </BackEndSubContainer>
                </ProgrammingLanguage>

                <OtherSkillsContainer>
                    <OtherSkillsTitle>Others</OtherSkillsTitle>
                    <BackEndSubContainer style={{justifyContent:'flex-start'}}>
                        <OtherSkillsSubContainer>
                            <SkillImage src="https://res.cloudinary.com/da7ik4khq/image/upload/v1691432385/Portfolio/Skills/1200px-OOP.svg_hkdnmf.png" alt="HTML" />
                            <SkillName>OOPs</SkillName>
                        </OtherSkillsSubContainer>
                        <OtherSkillsSubContainer>
                            <SkillImage src="" alt="CSS" />
                            <SkillName>DSA</SkillName>
                        </OtherSkillsSubContainer>
                    </BackEndSubContainer>
                </OtherSkillsContainer>
            </SkillSubContaiiner>
        </SkillsContainer>
    )
}
export default Skills