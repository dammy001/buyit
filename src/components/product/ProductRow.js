import React, { Component } from 'react';
import pic from './pic.jpeg';
import {Col, Button, Card } from 'react-bootstrap';

class ProductRow extends Component {
    constructor(props){
        super(props);
    }

render(){
        return (<Col md={3}>
            <Card className="wow bounceIn card" data-wow-delay="0.7s">
                <Card.Img variant="top" src={pic} className="pic"/>
                <Card.Body>
                    <Card.Title>{this.props.obj.productTitle}</Card.Title>
                  <Card.Text className="price">
                    N{this.props.obj.price}
                  </Card.Text>
                  <Button href={"/productdetails/" + this.props.obj.id} variant="danger" className="addtocart">Shop Now</Button>
                </Card.Body>
              </Card>
            </Col>
        )
    }
}

export default ProductRow