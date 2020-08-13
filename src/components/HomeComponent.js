import React, { Component } from 'react';
import Slider from "react-slick";
import 'react-animated-slider/build/horizontal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';
import Picmodal from './img/IMG_20200114_093554_764-removebg.png';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: true
        };

        this.handleShow = this.handleShow.bind(this);
    }

    handleShow() {
        this.setState({ modalState: !this.state.modalState });
    }
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            rtl: true,
            arrows: false
        };

        return (
            <>

                <div>
                    <div className={"modal fade" + (this.state.modalState ? "show d-block" : " d-none")} style={{ background: 'aliceblue' }} tabIndex="-1" role="dialog">
                        <div className="modal-dialog" role="document" style={{ width: '35vw' }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title">hello,</h3>
                                    <button type="button" onClick={this.handleShow}>
                                        <i class="arrow right"></i>
                                    </button>
                                </div>
                                <div className="modal-body" style={{ paddingBottom: '0' }}>
                                    <img src={Picmodal} alt="my_pic" style={{ width: '30vw', height: '30vw' }} />
                                </div>
                                <div className="modal-footer">
                                    <p style={{ fontSize: '2vw', fontFamily: 'Ink Free' }}>Welcome to my portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" >
                    <Container>
                        <Row>
                            <div className="col-12">
                                <div className="slidingthoughts">
                                    <Slider {...settings}>
                                        <div className="drag">
                                            <h3>THINK</h3>
                                        </div>
                                        <div className="drag">
                                            <h3>CODE</h3>
                                        </div>
                                        <div className="drag">
                                            <h3>CREATE</h3>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-6" id="intro">
                                <div className="homemyintro">
                                    <p>hi!</p>
                                    <p>explore everything</p>
                                    <p>about me here..!</p>
                                </div>
                                <div className="homenamework">
                                    <div className="mynamehomeintro">
                                        <p>Devansh Mittal</p>
                                    </div>
                                    <div className="myworkhome">
                                        <p>[Frontend Developer]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 resumebutton">
                                <Button variant="outline-light" className="buttonresume">Resume Download</Button>{' '}
                            </div>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
export default Home