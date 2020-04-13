import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './home.scss';
import Shop from './shop3.png'
import WOW from 'wowjs';
import Footer from '../footer/footer';
import Product from '../product/product';


export default class Home extends Component {

    componentDidMount() {
        new WOW.WOW().init();
      }

  render() {
    return <div className="main">
    <div className="home">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="wow flash" data-wow-offset="150" data-wow-delay="0.5s">Good Day Start With Great Wears.</h1>
                        <Button variant="primary" className="shopnow">Shop Now</Button>
                    </Col>
                    <Col md={6}>
                        <img src={Shop} className="shop" alt="shop"/>
                    </Col>
                </Row>
            </Container>
        </div>

        <Product />
        
        <Footer />
    </div>
  }
}
