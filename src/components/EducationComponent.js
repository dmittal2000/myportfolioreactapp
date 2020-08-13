import React, { Component } from 'react';
import Educationpic from './img/resize-darkedu.jpg';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Footer from './FooterComponent';
import { Container } from 'reactstrap';

export default class Education extends Component {
  render() {
    return (
      <>
        <div className='edupage'>
          <div className="boxeducation">
            <img src={Educationpic} alt="educationpic" className="educationpic" />
            <div className="educationheading">Education</div>
          </div>
          <Container>

            <div className="educationcontent">

              <Accordion defaultActiveKey="0">
                <Card border="secondary" bg="dark" >
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="educourseheading"> Graduation (Undergoing) </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body><div className="courseheadingedu">B.tech (2018-2022)</div><div className="coursedetailsedu"><p>Electronics & Communication Engineering</p><p>Ajay Kumar Garg Engineering College</p><p>Gaziabad, Uttar Pradesh, India</p></div></Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card border="secondary" bg="dark">
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="educourseheading">12th </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body><div className="courseheadingedu">12th (2017-2018)</div><div className="coursedetailsedu"><p>Rainbow School</p><p>Delhi Road, Saharanpur</p><p>Uttar Pradesh, India</p><p>Percentage: 90%</p></div></Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card border="secondary" bg="dark">
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="educourseheading">10th </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body><div className="courseheadingedu">10th (2015-2016)</div><div className="coursede tailsedu"><p>Rainbow School</p><p>Delhi Road, Saharanpur</p><p>Uttar Pradesh, India</p><p>CGPA: 10 </p></div></Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </div>
          </Container>

          <Footer />
        </div>
      </>
    )
  }
}