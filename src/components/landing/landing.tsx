import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Row, Col, Container, Button, Image, Modal, Form, ModalBody } from 'react-bootstrap';
import './landing.css';
import logo from '../../assets/images/logo.svg';
// import CarouselSlide from '../carousel/carousel';
// import { test } from '../../service/generalAPI';
// import Browse from '../browse/browse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
// const generalAPI = new GeneralAPI();
class Landing extends React.Component {

  
  state = {
    selectedCurrency: "ETH",
    showModal: false,
    email: "",
    password: ""
  };


  onChangeCurrency(event: React.FormEvent<HTMLSelectElement>) {
    console.warn("state bef ", JSON.stringify(this.state))
    const value = event.currentTarget.value;
    console.warn("value ", value)
    // const newCurrencyState = this.state.currency.map(item => {
    //   if (item.value === value) {
    //     item.selected = true;
    //   } else {
    //     item.selected = false;
    //   }
    // });


    this.setState({
      selectedCurrency: value
    }, () => {
      console.warn("state aft ", JSON.stringify(this.state))
    });

  }

  handleModalShow() {
    this.setState({ showModal: true })
  }

  handleModalClose() {
    this.setState({ showModal: false })
  }

  onInputChange(event: any) {
 
    // const value = event.currentTarget.value;
    // const name = event.currentTarget.name;
    const { name, value } = event.currentTarget;
    console.warn("value ", value);
    console.warn("name ", name);
    // const input = this.state.input;
    this.setState({
      [name]: value
    }, () => {
      console.warn("email changed ", this.state.email)
      console.warn("password changed ", this.state.password)
    })
  }


  // callAPI(){
  //   // alert('An essay was submitted: ' + this.state);
  //   const data = test().then( res => console.warn("res ", res));
  // }

  render(): React.ReactNode {
    return (
      <Router>
        <div>
          <Row className="collab">
            <p>
              🔥 Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE! <a href="/">Check it out</a>
            </p>
          </Row>
          <Row>
            <Col lg="2">
              <img src={logo} className="logo" />
            </Col>
            <Col >
              <div className="floatRight">
                <Link className="navlink" to="/browse">Browse</Link>
                <Link className="navlink" to="/">Discover</Link>
                <Link className="navlink" to="/browse">Mint an item</Link>
                <Link className="navlink" to="/dashboard">Explore</Link>

                <select className="navlink" onChange={e => this.onChangeCurrency(e)} value={this.state.selectedCurrency}>
                  {/* {this.state.currency.map(el => {
                    if (el && el.value) {
                      return (<option key={el.value}>{el.value}</option>)
                    } else {
                      return (<option></option>)
                    }
                  }
                  )} */}
                  <option value="ETH">ETH</option>
                  <option value="USD">USD</option>
                </select>

                {/* <option>
                    <Link className="navlink" to="/">ETH</Link>
                  </option>
                  <option>
                    <Link className="navlink" to="/">ETH</Link>
                  </option> */}
                <Button className="navlink" variant="outline-primary" onClick={() => this.handleModalShow()}>Login</Button>
                <Link className="navlink" to="/dashboard"><Button variant="primary">Sign Up</Button></Link>
              </div>

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

          {/* LOGIN */}
          <Modal show={this.state.showModal} onHide={() => this.handleModalClose()} size="lg" centered>
            <ModalBody>
              <Row>
                <Col>
                  {/* <CarouselSlide /> */}
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" onChange={e => this.onInputChange(e)} value={this.state.email}/>
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" name="password" onChange={e => this.onInputChange(e)} value={this.state.password}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {/* <Button variant="primary" type="submit" onClick={this.callAPI}>
                      Submit
                    </Button> */}
                </Col>
              </Row>
            </ModalBody>

          </Modal>
        </div>
      </Router>
    );
  }

}

export default Landing;