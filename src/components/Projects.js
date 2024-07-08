import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pro1 from "../assets/img/pro1.png";
import pro2 from "../assets/img/pro2.jpg";
import pro3 from "../assets/img/pro3.jpg";
import pro4 from "../assets/img/pro4.jpg";
import pro5 from "../assets/img/pro5.jpg";
import pro6 from "../assets/img/pro6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro1,
    },
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro2,
    },
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro3,
    },
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro4,
    },
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro5,
    },
    {
      title: "Project Front-end",
      description: "Design & Development",
      imgUrl: pro6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Java , IT Support , Python , Mysql , Network, Html , Css, JavaSCRIPT, bootstrap,oprting System</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                    <p>IT support engineer in addition to a desktop application developer using the Java and Python programming language and the framework Django from Python Front-end developer and learned to develop back-ends until he became an integrated web developer</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>IT support engineer in addition to a desktop application developer using the Java and Python programming language and the framework Django from Python Front-end developer and learned to develop back-ends until he became an integrated web developer</p>
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
