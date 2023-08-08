import { Col } from "react-bootstrap";
import liveIcon from '../assets/icons/icons8-live.svg';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a class="nav-link active" href="https://celadon-horse-0a68b1.netlify.app/" target="_blank" >
            <img src={liveIcon} alt="Image" style={{width:"10%", marginRight:"3px"}}/>
            </a>
        </div>
      </div>
    </Col>
  )
}
