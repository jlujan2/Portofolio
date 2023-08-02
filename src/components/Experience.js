import { Accordion, Container, Row } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { createSvgIcon } from '@mui/material/utils';
import javaIcon from "../assets/icons/java.svg"
import springBootIcon from "../assets/icons/spring-boot.svg"
import sqlIcon from "../assets/icons/sql.png"
import reactIcon from "../assets/icons/react.svg"
import apiIcon from "../assets/icons/api.png"

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'white' }}
        onClick={decoratedOnClick}
        
      >
        <PlusIcon className="plus" style={{color:"white", backgroundColor: "#4A2FBD"}}>
            {children}
        </PlusIcon>
      </button>
    );
  }

  const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

export const Experience = () => {

    return(
        <section className="experience" id="experience" style={{alignItems: "center"}}> 
            <div className="container" >
                <div className="row" style={{alignItems: "center"}}>
                    <h2>Experience</h2>
                </div>
               
                <div className="row" >
                    <div >
                        <Accordion defaultActiveKey="0" >
                            
                              <Accordion.Item className='accordion-item' eventKey="0">
                            
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Software Engineer @ Eurofins</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developing back-end and database solutions in DNA Web App using Java, Sql in SpringBoot framework and ReactJs.</p>
                                <div>
                                  <img src={javaIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={springBootIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={reactIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
                                </div>
                            </Accordion.Body>
                            
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            
        </section>
    )
}