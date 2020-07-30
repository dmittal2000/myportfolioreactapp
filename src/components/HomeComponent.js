import React, { Component } from 'react';
import Mypic from './img/homepic.jpeg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {Carousel, Item, Caption} from 'react-router-dom';
class Home extends Component {
    render() {
        // const slides = [
        //     { title: 'Think' },
        //     { title: 'Code' },
        //     { title: 'Create' }
        // ];

        return (
            <div id="home" >
                <div className="container">
                    <div className="row ">
                        <div className="col-6" id="pic">
                            <div>
                                <img src={Mypic} alt="dev_pic" className="homepagephoto" />
                            </div>
                            <div>

                                {/* <Slider>
                                    {slides.map((slide, index) => <div key={index}>
                                        <h2>{slide.title}</h2>
                                    </div>)}
                                </Slider> */}
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=First slide&bg=373940"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=Second slide&bg=282c34"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="holder.js/800x400?text=Third slide&bg=20232a"
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className="col-6" id="intro">
                            <div className="homemyintro">
                                <p>hi!</p>
                                <p>explore everything</p>
                                <p>about me here</p>
                            </div>
                            <div className="mynamehomeintro">
                                <p>-Devansh Mittal</p>
                            </div>
                            <div id="mywork">
                                <p>[Frontend Developer]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home