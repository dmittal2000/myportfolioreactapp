import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 footermyname">
                        <p>Devansh Mittal</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 footersocialicons">
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-lg fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/"><i className="fa fa-lg fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-lg fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-github" href="http://github.com/"><i className="fa fa-lg fa-github"></i></a>
                            <a className="btn btn-social-icon btn-gmail" href="http://gmail.com/"><i className="fa fa-lg fa-gmail"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer