import React, { Component } from 'react';
import {Myimg} from './img/homepic.jpeg';
import Slider from "react-slick";
import 'react-animated-slider/build/horizontal.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';

class Home extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: true,
            arrows: false
        };

        return (
            <>
                <div id="home" >
                    <div className="container">
                        <div className="row ">
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
                        </div>
                        <div className="row ">
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
                                    <div class="overlay">
                                        <img src={Myimg} className="myimagenav" />
                                    </div>
                                    <div className="myworkhome">
                                        <p>[Frontend Developer]</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 resumebutton">
                                <Button variant="outline-light" className="buttonresume">Resume Download</Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Home