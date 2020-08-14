import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardGroup, ProgressBar } from 'react-bootstrap';
import Footer from './FooterComponent';
import Reactjs_logo from './img/Reactjs_logo.png'
import html_logo from './img/html_logo.png'
import css_logo from './img/css_logo.png'
import bootstrap_logo from './img/bootstrap_logo.png'
import JS_logo from './img/JS_logo.png'
import c_logo from './img/c_logo.webp'
import python_logo from './img/python_logo.png'
import pcb_logo from './img/pcb_logo.jpg'
import ssf_logo from './img/ssf_logo.png'
import robocon_logo from './img/robocon_logo.png'
import coursera_logo from './img/coursera_logo.png'
import internshala_logo from './img/internshala_logo.webp'

export default class Skill extends Component {
    render() {
        return (
            <div className='skillpicbox'>
                <div className="skillpic">
                    <Container>
                        <div className="expskillheading">
                            Experience & Skills
                       </div>
                        <div className="skillheading">
                            Skills
                       </div>
                        <div className="skillcontent">

                            <CardGroup>
                                <Row>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={Reactjs_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle" >ReactJS</Card.Title>
                                                <Card.Text className="skillcardtext" >
                                                    <ProgressBar variant="success" now={80} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={html_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">HTML</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={87} />
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={css_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">CSS</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={80} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={bootstrap_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">Bootstrap</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={81} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                     </Row>
                            </CardGroup>
                            <CardGroup>
                                <Row>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={JS_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">JavaScript</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={87} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={c_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">C</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={90} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={python_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">Python</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={75} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="skillcardstyle">
                                            <Card.Img variant="top" src={pcb_logo} className='skilllogo' />
                                            <Card.Body>
                                                <Card.Title className="skillcardtitle">PCB Designing</Card.Title>
                                                <Card.Text className="skillcardtext">
                                                    <ProgressBar variant="success" now={85} />
                                                </Card.Text>
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                    
                                </Row>
                            </CardGroup>
                        </div>

                        <div className="expheading">
                            Experience
                       </div>

                        <CardGroup>
                            <Row>
                                <Col>
                                    <Card className="skillcardstyle">
                                        <Card.Img variant="top" src={ssf_logo} className='skilllogo' />
                                        <Card.Body>
                                            <Card.Title className="skillcardtitle">Slum Swaraj Foundation</Card.Title>
                                            <Card.Text className="skillcardtext">
                                                An education volunteer, helping the less- privelged children too get educated. Making them aware of life values. <br /> Sept 2018 - Present
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                                <Col>    <Card className="skillcardstyle">
                                    <Card.Img variant="top" src={robocon_logo} className='skilllogo' />
                                    <Card.Body>
                                        <Card.Title className="skillcardtitle">Robotics Club</Card.Title>
                                        <Card.Text className="skillcardtext">
                                            An active member (working in Mechatronics) at Robotics Club, AKGEC. Also the team member of Robocon 2020. <br /> Sept 2019 - Present
                                            </Card.Text>
                                    </Card.Body>

                                </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                        
                        <div className="expheading">
                            Certificates
                       </div>

                        <CardGroup>
                            <Row>
                                <Col>
                                    <Card className="skillcardstyle">
                                        <Card.Img variant="top" src={coursera_logo} className='skilllogo' />
                                        <Card.Body>
                                            <Card.Title className="skillcardtitle">Front-End Web Development with React</Card.Title>
                                            <Card.Text className="skillcardtext">
                                                An online non-credit course authorized by The Hong Kong University of Science and Technology and offered through Coursera, by Jogesh K. Muppala <br /> July 2020 - Present
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="skillcardstyle">
                                        <Card.Img variant="top" src={coursera_logo} className='skilllogo' />
                                        <Card.Body>
                                            <Card.Title className="skillcardtitle">Introduction to Google Docs</Card.Title>
                                            <Card.Text className="skillcardtext">
                                                An online non-credit course authorized by Coursera Project Network and offered through Coursera, by Melissa Al-Shaer <br /> June 2020 - Present
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className="skillcardstyle">
                                        <Card.Img variant="top" src={coursera_logo} className='skilllogo' />
                                        <Card.Body>
                                            <Card.Title className="skillcardtitle">Interactivity with JavaScript</Card.Title>
                                            <Card.Text className="skillcardtext">
                                                An online non-credit course authorized by University of Michigan and offered through Coursera, by Colleen van Lent. <br /> June 2020 - Present
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="skillcardstyle">
                                        <Card.Img variant="top" src={internshala_logo} className='skilllogo' />
                                        <Card.Body>
                                            <Card.Title className="skillcardtitle">Web Development</Card.Title>
                                            <Card.Text className="skillcardtext">
                                                The training program consisted of HTML & CSS, Bootstrap, SQL and PHP modules, by Sarvesh Agrawal.<br /> July 2019 - Present
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            </Row>
                        </CardGroup>
                    </Container>

                </div>
                <Footer />
            </div>
        )
    }
}