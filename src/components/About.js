import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePhoto from "../assets/img/juank.jpg"

export const About = () => {

    const about = "My name is Juan Carlos, I graduated from the University of South Florida. Then I worked in different companies as a" 
    +"backend engineer learning different frameworks during my 5+ years of experience. I really enjoy learning new frameworks and collaborating in new and exciting projects."
    +"When I am not writing code, you will see me working out, traveling, or working on my gardening skills.";

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
        <section className="project" id="about">
            <h2>About</h2>  
            <Container className="about">
               
                <div className="image">
                  <Image src={profilePhoto}></Image>
                </div>
                <div className="description">
                  <p>{about}</p>
                </div>
                
            </Container>
        </section>
      )
}

