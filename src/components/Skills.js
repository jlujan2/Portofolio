import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Row } from "react-bootstrap";
import { SiSpring, SiApachekafka
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaJava, FaReact, FaPython, FaDocker, FaGitAlt} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Professional  <strong className="purple">Skillset </strong></h2>
                        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col xs={4} md={2} className="tech-icons">
                          <FaJava />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <SiSpring />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <TbSql />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <RiJavascriptFill />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <FaReact />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <FaPython />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <FaDocker />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <SiApachekafka />
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                          <FaGitAlt  />
                        </Col>
                        
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
