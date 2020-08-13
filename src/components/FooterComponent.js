import React from 'react';
import { Container, Row } from 'reactstrap';

function Footer(props) {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <div className="col-12 footermyname">
                        <p>Devansh Mittal</p>
                    </div>
                </Row>
                <Row>
                    <div className="col-12 footersocialicons">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-lg fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-lg fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-lg fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-lg fa-github"></i></a>
                        <a className="btn btn-social-icon btn-gmail" href="http://gmail.com/"><i className="fa fa-lg fa-gmail"></i></a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer