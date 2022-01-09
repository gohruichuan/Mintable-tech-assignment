import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Bootstrap
import { Row, Col, Container, Button, Image, Modal, Form, ModalBody } from 'react-bootstrap';

// Assets
import logo from '../../assets/images/logo.svg';
import hero from '../../assets/images/hero.svg';
import raffleBg from '../../assets/images/raffle-bg.svg';
import minus from '../../assets/images/minus.svg';

// Components
import Searchbar from '../searchbar/searchbar';
import CardItem from '../card/card';
// import CarouselSlide from '../carousel/carousel';
// import { test } from '../../service/generalAPI';
// import Browse from '../browse/browse';

// CSS
import './landing.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Landing extends React.Component {

  
  state = {
    selectedCurrency: "ETHEREUM",
    heroData: {
      imageSize: "35rem",
      thumbnail: logo,
      name: "Dan Mumford",
      occupation: "Artist",
      NFTName: "IN THE YEAR 200X",
      price: {
        ether: 0.01,
        usd: 50
      }
    },
    raffleQuantity: 1,
    raffleLimit: {
      minLimit: 1,
      maxLimit: 20
    }
  };

  minusQuantity(){
    console.warn("minus!");
    let _tempQuantity = this.state.raffleQuantity - 1;
    let value = Math.max(Number(this.state.raffleLimit.minLimit), Math.min(Number(this.state.raffleLimit.maxLimit), Number(_tempQuantity)));
    console.warn("value ", value);

    this.setState({raffleQuantity: value});
  }

  onChangeQuantity(event: React.FormEvent<HTMLInputElement>){
    let value = event.currentTarget.value;
    console.warn("value ", value);
    
    // value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    // setTokenQuantity(value)
  }
  render(): React.ReactNode {
    return (
      <Router>
        <div>
          <Row className="justify-content-md-center collab">
            <Col xs lg="2">
              
            </Col>
            <Col md="auto">
              <p>
                🔥 Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE! <a href="/">Check it out</a>
              </p>
            </Col>
            <Col xs lg="2">

              <div className="dropdown navlink">
                <p>
                  ETHEREUM  <FontAwesomeIcon icon={faChevronDown} />
                </p>
              </div>
            </Col>
          </Row>

            <Row className="navbar">
              <Col lg="2">
                <img src={logo} className="logo" />
              </Col>
              <Col>
                <Searchbar/>
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

            <Row className="subNavbar">
              <Col>
                <Link className="navlink" to="/art">Art</Link>
                <Link className="navlink" to="/collectibles">Collectibles</Link>
                <Link className="navlink" to="/game">Game Items</Link>
                <Link className="navlink" to="/music">Music</Link>
                <Link className="navlink" to="/domains">Domains</Link>
                <Link className="navlink" to="/templates">Templates</Link>
                <Link className="navlink" to="/videos">Videos</Link>
              </Col>
            </Row>

            <Row className="mt">
              <Col md={{ span: 3, offset: 4}} className="center alignLeft">
                <h5>
                  Completely free to mint your first NFT
                </h5>
                <h1>
                  Turn any creation info an item on the blockchain
                </h1>
                <br></br>
                <h5>
                  Trade digital items on Mintable to easily earn crypto
                </h5>
                <br></br>
                <Row>
                <Col md={6}>
                  <Button size="lg" variant="primary">Start Minting Now</Button>
                </Col>
                <Col md={6}>
                  <Button size="lg" variant="primary">Shop Now</Button>
                </Col>
                </Row>
                
              </Col>
              <Col md={{ span: 4, offset: 4}} className="center">
                <CardItem heroData={this.state.heroData}/>
              </Col>
            </Row>

            <h1>DISCORD</h1>
            <h1>DROP IS LIVE</h1>
            <h1>Promoted Creations</h1>

            <Row>
              <img src={raffleBg} style={{position: "absolute"}}/>
              <Row className="mt">
                <h3>
                  Mintable Raffle
                </h3>
                <h4>
                  Participate and win high quality currated NFTs
                </h4>
              </Row>
              <Col md={{ span: 5, offset: 4}} className="center">
                <img src={logo} style={{width: "40rem"}}/>
                <br></br>
                <h3>
                  NFTS WORTH UP TO
                </h3>
                <br></br>
                <h1>
                  Ξ1.54
                </h1>
              </Col>
              <Col md={{ span: 4, offset: 4}} className="center">

                <img src={logo} style={{width: "20rem"}}/>
                <h3>
                  NO OF RAFFLE TICKETS
                </h3>

                <img className="logo" src={minus} onClick={ _ => this.minusQuantity} />
                <input placeholder="Quantity" maxLength={3} onChange={e => this.onChangeQuantity(e)} value={this.state.raffleQuantity}/>
              </Col>
            </Row>
          <Switch >
            <Route exact path="/">
              <img src={logo} />
            </Route>
            <Route path="/browse">
              {/* <Browse/> */}
            </Route>
          </Switch >

        </div>
      </Router>
    );
  }

}

export default Landing;