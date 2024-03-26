import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/e-commerce-app (2).png";
import projImg2 from "../assets/img/microservices.png";
import tinderClone from "../assets/img/demo.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import liveIcon from '../assets/icons/icons8-live.svg';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce Application",
      description: "ReactJS",
      imgUrl: projImg1,
      live: liveIcon,
      url: "https://juan-lujan-ecommerce.netlify.app/"
    }
  ];

  const projectsBackend = [
    {
      title: "Ecommerce Microservices Application Backend",
      description: "Java, SQL, Spring Boot, MongDB, PostGres",
      imgUrl: projImg2,
      live: liveIcon,
      url: "https://github.com/jlujan2/Microservices"
    },
  ];

  const projectsFullStack = [
    {
      title: "Tinder Clone",
      description: "Tinder Clone Full-Stack project using: ReactJs, Java 17, Spring Boot, Spring Security(Basic Authentication), MongoDB(Atlas), and AWS",
      imgUrl: tinderClone,
      live: liveIcon,
      url: "https://github.com/jlujan2/tinder-clone-full-stack"
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some Personal Projects I am working on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front End Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Back End Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Full Stack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                           projectsBackend.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                           projectsFullStack.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
