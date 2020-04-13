import React, { useState, useEffect } from 'react'
import './footer.scss'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import WOW from 'wowjs';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

const Footer = () => {

  const [subscribeText, setInputText] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="footer">
      <Container fluid className="wow slideInUp footercontent" data-wow-offset="70">
          <Row>
            <Col md={3}>
              <h4>ABOUT US</h4>
            </Col>

            <Col md={2}>
              <h4>MY ACCOUNT</h4>
            </Col>

            <Col md={3}>
              <h4>INFORMATION</h4>
              <h4>{subscribeText}</h4>
            </Col>

            <Col md={4}>
              <h4>NEWSLETTER</h4>
              <p>To receive mails about our new products and service, kindly subscribe.</p>
              <Form>
                <Form.Row>
                  <Col md={9}>
                    <Form.Group inline>
                    <Form.Control type="email" onChange={ (e) => setInputText(e.target.value)} placeholder="Enter your email" className="email" />
                  </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Button variant="primary" className="subscribeBtn" disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}>{isLoading ? "Thanks for subscribing" : "subscribe"}</Button>
                  </Col>
                </Form.Row>
                
              </Form>
            </Col>

          </Row>
      </Container>
    </div>)

}

export default Footer
