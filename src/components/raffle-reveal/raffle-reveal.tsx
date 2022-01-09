import React from "react";
import { Row, Col, Container, Button, Image, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// Assets
import logo from '../../assets/images/logo.svg';

// Components
import Searchbar from '../searchbar/searchbar';

// CSS
import './raffle-reveal.css';

class RaffleReveal extends React.Component<any> {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.el
        }
    }
    render(): React.ReactNode {
        return (
            <div className="wrapper">
                <Row className="revealnavbar">
                    <Col lg="2">
                        <img src={logo} className="logo" />
                    </Col>
                    <Col>
                        <Searchbar />
                    </Col>
                    <Col className="floatRight">
                        <Link className="navlink" to="/browse">Browse</Link>
                        <Link className="navlink" to="/discover">Discover</Link>
                        <Link className="navlink" to="/mint">Mint an item</Link>
                        <Link className="navlink" to="/vote">Vote/DAO</Link>
                        <Button className="navlink" variant="outline-light">Login</Button>
                        <Link className="navlink" to="/signup"><Button variant="primary">Sign Up</Button></Link>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt">
                    <Col xs lg="4">
                        <Card style={{ width: "30rem"}}>
                        <Card.Header className="alignLeft"><h3>Get More Tickets
                            <span className="floatRight">
                            <Button variant="primary" size="lg">Buy</Button>
                            </span>
                            </h3> </Card.Header>
                            <Card.Img variant="top" src={logo} style={{ width: "15rem", borderRadius: "50px" }} className="center mt"/>
                            <Card.Img variant="top" src={logo} style={{ width: "15rem", borderRadius: "50px" }} className="center mt"/>
                            <Card.Img variant="top" src={logo} style={{ width: "15rem", borderRadius: "50px" }} className="center mt"/>

                            {/* <Card.Body>
                                <Row>
                                    <Col md={6} className="alignLeft">
                                        <Card.Title>
                                            asd
                                        </Card.Title>
                                        <Card.Text>
                                            asd
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body> */}
                        </Card>
                    </Col>
                    <Col xs lg="7">
                        <Card style={{borderRadius: "50px" }} >
                            <Card.Body>
                                <br></br>
                                <h2>Collectors Event</h2>
                                <h5>Participate and win high quality currated NFTs</h5>
                                <br></br><br></br>
                                <div className="upload center">
                                    <Card.Img variant="top" src={logo} style={{ width: "20rem", borderRadius: "50px" }} className="center mt"/>
                                    <p>
                                        Drag a ticket or use the button below to draw your tickets
                                    </p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col md={2}>
                                        <Card.Img variant="top" src={logo} style={{ width: "5rem"}}/>
                                    </Col>
                                    <Col>
                                    <p className="alignLeft">
                                        <h4>Draw Tickets <br></br>
                                        10 Tickets found</h4> 
                                         <br></br>
                                        Open  your tickets and get a chance to win $1000 worth of high quality NFTs!  Learn More
                                    </p>
                                    </Col>
                                    <Col md={2}>
                                        <select style={{width: "100%", textAlign: "left"}}>
                                            <option>
                                                Silver Ticket (1)
                                            </option>
                                        </select>
                                        <br></br>
                                        <Button variant="primary">Draw Ticket</Button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RaffleReveal;