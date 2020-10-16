import React, { Component } from 'react';
import logo from '../images/about/Mathew0267-2000fpo JPEG.jpg';
import {
    Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class About extends Component {
    displayName = About.name

    state = {
        name: "",
        title: "",
        location: "",
        description: "",
    }

    componentDidMount() {
        fetch('api/about')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    title: data.title,
                    location: data.location,
                    description: data.description
                })
            })
    }

    render() {
        return (
            <div style={{ padding: "15px" }}>
                <Row>
                    <Col>
                        <img style={{ height: "100px" }} src={logo} />
                    </Col>
                    <Col md={3} className="center-mobile-text">
                        <div >
                            <h5>{this.state.name}</h5>
                            <p>{this.state.location}</p>
                        </div>
                        <a style={{ color: "#007bb5" }} target="_blank" href="https://www.linkedin.com/in/mathew-akre29/">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a style={{ color: "black" }} target="_blank" href="https://github.com/Mathew29">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                        <a style={{ color: "red" }} target="_blank" href="mailto:mwakre29@gmail.com">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </Col>
                    <Col md={7}>
                        <p className="textStyle">{this.state.description}</p>
                    </Col>
                </Row>
            </div>
            )
    }
}