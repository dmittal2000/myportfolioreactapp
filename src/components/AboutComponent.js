import React, { Component } from 'react';
import Footer from './FooterComponent';
import { Container } from 'reactstrap';

class About extends Component {
    render() {
        return (
            <>
            <div className="about">
                <Container>
                    <div className="aboutheading">
                        <p>hello,</p>
                    </div>
                    <div className="aboutcontent">
                        <p>I am Devansh Mittal, B.Tech 3rd year student.  I am doing my graduation in Electronics and Communication from Ajay Kumar Garg Engineering College, Gaziabad, Uttar Pradesh, India.</p>
                        <p>I like to play various sports, but my favorite sport is badminton. I am always curious to learn new things, whether they are related to study or anything else, because I believe there is no harm to gain as much knowledge as one can.</p><p id="aboutlastline">I am born up in a middle class family. My father do service at a well-reputed place and my mother is a housewife. Since, childhood I have a devotional environment in my house.</p>
                    </div>
                </Container>
            </div>

            <Footer />
            </>
        )
    }
}
export default About