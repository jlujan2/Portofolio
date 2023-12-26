import { Accordion, Container, Row } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { createSvgIcon } from '@mui/material/utils';
import javaIcon from "../assets/icons/java.svg"
import springBootIcon from "../assets/icons/spring-boot.svg"
import sqlIcon from "../assets/icons/sql.png"
import reactIcon from "../assets/icons/react.svg"
import dotnetIcon from "../assets/icons/aspnet.svg"
import javaScriptIcon from "../assets/icons/javascriptIcon.svg"

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
                            
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >BackEnd Engineer @ Chromatics Games</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developed backend high-quality, robust production code for DNA web application. Create Rest API following right practices such as versioning, accurate response calls, exception handling, pagination, and caching. Developed and maintained Microservices using Config Server, Circuit Breaker, API Gateway, etc. Consumed microservices using Axios from React application using React and Redux</p>
                                <div>
                                  <img src={javaIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={springBootIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={reactIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
                                </div>
                            </Accordion.Body>
                            
                            </Accordion.Item>
                            
                            <Accordion.Item className='accordion-item' eventKey="0">
                            
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Application Engineer @ Eurofins</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developed backend high-quality, robust production code for DNA web application. Create Rest API following right practices such as versioning, accurate response calls, exception handling, pagination, and caching. Developed and maintained Microservices using Config Server, Circuit Breaker, API Gateway, etc. Consumed microservices using Axios from React application using React and Redux</p>
                                <div>
                                  <img src={javaIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={springBootIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={reactIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
                                </div>
                            </Accordion.Body>
                            
                            </Accordion.Item>

                            <Accordion.Item className='accordion-item' eventKey="0">
                            
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Software Engineer @ American Express</p></Accordion.Header>
                    
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

                            <Accordion.Item className='accordion-item' eventKey="0">
                            
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Software Engineer @ Infotech INC</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developing back-end and database solutions in DNA Web App using Java, Sql in SpringBoot framework and ReactJs.</p>
                                <div>
                                  <img src={dotnetIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={javaScriptIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
                                </div>
                            </Accordion.Body>
                            
                            </Accordion.Item>

                            <Accordion.Item className='accordion-item' eventKey="0">

                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Software Engineer @ Florida Blue</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developing back-end and database solutions in DNA Web App using Java, Sql in SpringBoot framework and ReactJs.</p>
                                <div>
                                  <img src={dotnetIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={javaScriptIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
                                </div>
                            </Accordion.Body>
                            
                            </Accordion.Item>

                            <Accordion.Item className='accordion-item' eventKey="0">
                              
                            <Accordion.Header style={{ backgroundColor:"#4A2FBD"}}><p >Senior Software Engineer @ Mindtree</p></Accordion.Header>
                    
                            <Accordion.Body>
                                <p>Developing back-end and database solutions in DNA Web App using Java, Sql in SpringBoot framework and ReactJs.</p>
                                <div>
                                  <img src={dotnetIcon} alt="Image" style={{width:"3%", marginRight:"3px"}}/>
                                  <img src={sqlIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  <img src={javaScriptIcon} alt="Image" style={{width:"3%", marginRight:"3px", marginLeft:"3px"}}/>
                                  
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