import React from 'react'
import './login.scss';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'
import WOW from 'wowjs';


export default class Login extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
      }

  render() {

    return (
      <div className="login">
        <Container>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="loginContainer">
                        <Container fluid>
                            <Row>
                                <Col md={4}>
                                    <Link to="/" style={{color: 'black'}}><FontAwesomeIcon className="icon" icon="arrow-left" size="2x"/></Link>
                                </Col>
                                <Col md={5}>
                                    <h2 className="wow flipInX" data-wow-delay="0.5s">Login Page</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <Form className="form">
                                        <Form.Group controlId="formBasicEmail" className="wow bounceIn email" data-wow-offset="50" data-wow-delay="1s">
                                            <Form.Control type="email" placeholder="Email" className="email2" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword" className="wow bounceIn password" data-wow-offset="50" data-wow-delay="2s">
                                            <Form.Control type="password" placeholder="Password" className="password2" />
                                        </Form.Group>
                                        
                                        <Form.Group className="wow bounceIn submitBtn" data-wow-offset="50" data-wow-delay="2.5s">
                                            <Button variant="primary" type="submit" className="submit">
                                                Log in
                                            </Button>
                                            
                                        </Form.Group>
                                        
                                    </Form>
                                </Col>
                            </Row>

                            <Row>
                            <Col md={3}></Col>
                            <Col md={8}>
                                <p>Don't have an account? <Link to={`/signup`} style={{fontSize: '1em', marginTop: '1em', color: 'yellow', textDecoration: 'none'}}>Sign up here</Link></p>
                            </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
      </div>
    )
  }
}
