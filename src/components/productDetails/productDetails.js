import React, { Component } from 'react'
import axios from 'axios';
import { Container, Row, Col, Button, Form } from 'react-bootstrap' 
import './productdetails.scss';
import pic from './pic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class ProductDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            description: '',
            price: '',
            image: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/product/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                title: res.data.productTitle,
                description: res.data.description,
                price: res.data.price
            })
            console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  render() {
    return (
      <div className="productdetails">
        <Container className="container">
            <Row>
                <Col md={6}>
                    <img src={pic} alt="product" />
                </Col>
                <Col md={6}>
                    <h2>Product Details</h2>
                    <div className="productD">
                        <h3>{this.state.title}</h3>
                        <h4>N {this.state.price}</h4>
                        <p>{this.state.description}</p>
                    </div>

                    <Form>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" className="quantity" /> 
                        </Form.Group>  
                    </Form>

                    <Button variant="dark" block><FontAwesomeIcon icon="shopping-cart" /> Add To Cart</Button>
                    
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
