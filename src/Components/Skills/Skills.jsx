import "./Skills.css"
import Carousel from 'react-multi-carousel';
import SkillsImage from './SkillsImage';
import 'react-multi-carousel/lib/styles.css';
import { Container, Col, Row } from "react-bootstrap";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
        <div className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skillsContainer">
                                <h2>Skills</h2>
                                <p>Showcasing the different level of proficiency for each skills I acquired throughout by Web Development journey.</p>
                            <Carousel responsive={responsive} infinite={true} className="skillslider">
                            <div className="skills">
                                <img src={SkillsImage.NinetyFive} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.NinetyFive} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Eighty} alt="" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Ninety} alt="" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.EightyFive} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Seventy} alt="" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.EightyFive} alt="" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.EightyFive} alt="" />
                                <h5>Express</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.NinetyFive} alt="" />
                                <h5>Figma</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.EightyFive} alt="" />
                                <h5>Git</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Seventy} alt="" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Ninety} alt="" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="skills">
                                <img src={SkillsImage.Ninety} alt="" />
                                <h5>SQL Server</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
        
        
    );
}
 
export default Skills;