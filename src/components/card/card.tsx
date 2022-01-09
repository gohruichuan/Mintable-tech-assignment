import React from "react";
import { Row, Col, Container, Button, Image, Card } from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';


class CardItem extends React.Component<any> {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {
            data: this.props.heroData
        }
    }
    render(): React.ReactNode {
        return (
            <Card style={{ width: this.state.data.imageSize, borderRadius: "50px"}}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Row>
                        <Col md={6} className="alignLeft">
                            <Card.Title>
                            <span>
                                <img src={this.state.data.thumbnail} className="thumbnail"/>
                            </span>
                            {this.state.data.name}
                            </Card.Title>
                            <Card.Text>
                                {this.state.data.occupation}
                            </Card.Text>
                        </Col>
                        <Col md={6} className="alignRight">
                            <Card.Title>{this.state.data.NFTName}</Card.Title>
                            <Card.Text>
                                <b>${this.state.data.price.usd}</b>({this.state.data.price.ether})
                            </Card.Text>
                        </Col>
                  
                    </Row>
                    {/* <Row>
                  
                   
                    </Row> */}
                
                    {/* <Button variant="primary" href="/">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        );
    }
}

export default CardItem;