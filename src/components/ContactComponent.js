import React, { Component } from 'react';
import Mypiccontact from './img/IMG_20200114_093554_764-removebg.png';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { Form, Button } from 'react-bootstrap';
import Footer from './FooterComponent';

class Contact extends Component {
    render() {
        return (
            <>
                <div className="contactbox">
                    <Container>
                        <div className="contactheading">
                            Contact me here!
                        </div>
                        <Row>

                            <div className="col-6 boxcontactdetails">

                                <div className="contactdetails">
                                    <div className="socialmediaiconscontact">
                                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-lg fa-facebook"></i></a><p style={{ color: 'purple' }}>Like me on Facebook</p><br />
                                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-lg fa-linkedin"></i></a><p style={{ color: 'blue' }}>Connect with me on Linkedin</p><br />
                                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-lg fa-twitter"></i></a><p style={{ color: 'lightblue' }}>Follow me on Twitter</p><br />
                                        <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-lg fa-github"></i></a><p style={{ color: 'green' }}>Check my work on Github</p><br />
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 mypiccontact">
                                <img src={Mypiccontact} alt="devpic" className="contactmypic" />
                            </div>

                        </Row>
                    </Container>
                    <div>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-3">Send me a mail</h1>
                                <Container>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <label style={{ padding: '1.5vw' }}>
                                                    Name:<br />
                                                    <input type="text" name="name" style={{ width: '35vw', height: '3vw' }} placeholder="Your name here" />
                                                </label>
                                                <br />
                                                <label style={{ padding: '1.5vw' }}>
                                                    Email:<br />
                                                    <input type="email" name="name" style={{ width: '35vw', height: '3vw' }} placeholder="Enter your Email" />
                                                </label>
                                            </Col>
                                            <Col>
                                                <div style={{ padding: '1.5vw' }}>
                                                    Your suggestions/feedback:<br />
                                                    <textarea type="text" name="name" style={{ width: "35vw", height: "10vw" }} placeholder="Your suggestions/feedback are required" /></div>
                                            </Col>
                                        </Row>

                                        <div className="submitcontactbutton">
                                            <Button variant="dark" style={{ margin: '1.5vw' }}>Submit</Button>
                                        </div>

                                    </Form>
                                </Container>
                            </Container>

                        </Jumbotron>
                    </div>
                   <Footer />
                </div>
            </>
        )
    }
}

export default Contact;