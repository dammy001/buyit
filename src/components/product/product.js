import React, { Component } from 'react'
import './product.scss';
import {Container, Row, Col, Button, Card } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import WOW from 'wowjs';
import axios from 'axios';
import ProductRow from './ProductRow';

export default class Product extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    new WOW.WOW().init();

    axios.get('http://localhost:8000/api/product')
    .then(res => {
      this.setState({products: res.data})
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  }

  Product(){
    return this.state.products.map((res, i) => {
      return <ProductRow obj={res} key={i} />
    })
  }

  render() {
    return <div className="product">
      <Container fluid>
          <Row>
            <Col md={12}>
              <div className="wow slideInUp title" data-wow-offset="50">
                <h5>Fashion Collection</h5>
                <h2>FEATURED PRODUCTS</h2>
                <p>Featured products that you'll love</p>
              </div>
            </Col>
          </Row>

          <Row>
            {this.Product()}
            {/* <Col md={3}>
            <Card className="wow bounceIn card" data-wow-delay="0.7s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Natural Gown</Card.Title>
                  <Card.Text className="price">
                    N20,000
                  </Card.Text>
                  <Button href="/productdetails" variant="danger" className="addtocart">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
            <Card className="wow bounceIn card" data-wow-delay="1.2s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Natural Gown</Card.Title>
                  <Card.Text className="price">
                    N20,000
                  </Card.Text>
                  <Button href="/productdetails" variant="danger" className="addtocart">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
            <Card className="wow bounceIn card" data-wow-delay="1.6s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Natural Gown</Card.Title>
                  <Card.Text className="price">
                    N20,000
                  </Card.Text>
                  <Button href="/productdetails" variant="danger" className="addtocart">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
            <Card className="wow bounceIn card" data-wow-delay="2s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Natural Gown</Card.Title>
                  <Card.Text className="price">
                    N20,000
                  </Card.Text>
                  <Button href="/productdetails" variant="danger" className="addtocart">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
               */}
          {/* <CardDeck className="classdeck">
              <Card className="wow bounceIn p-1" data-wow-delay="0.7s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Natural Gown</Card.Title>
                  <Card.Text>
                    N20,000
                  </Card.Text>
                  <Button variant="danger" className="addtocart">Add to cart</Button>
                </Card.Body>
              </Card>

              <Card className="wow bounceIn" data-wow-delay="1.2s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="wow bounceIn" data-wow-delay="1.7s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck> */}
            
          </Row>
      </Container>
    </div>
  }
}
