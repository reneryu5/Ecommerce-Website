import React from 'react';
import { Carousel, Container, Row, Col, Nav } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col md={2} className="bg-light">
          <Nav className="flex-column">
            <Nav.Link href="#">Woman's Fashion</Nav.Link>
            <Nav.Link href="#">Men's Fashion</Nav.Link>
            <Nav.Link href="#">Electronics</Nav.Link>
            <Nav.Link href="#">Home & Lifestyle</Nav.Link>
            <Nav.Link href="#">Medicine</Nav.Link>
            <Nav.Link href="#">Sports & Outdoor</Nav.Link>
            <Nav.Link href="#">Baby's & Toys</Nav.Link>
            <Nav.Link href="#">Groceries & Pets</Nav.Link>
            <Nav.Link href="#">Health & Beauty</Nav.Link>
          </Nav>
        </Col>
        <Col md={10}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://picsum.photos/id/48/800/300'
                alt="First slide"
              />
              <Carousel.Caption className="text-start">
                <h3>Macbook Air Series</h3>
                <p>Up to 10% off Voucher</p>
                <div className='d-grid gap-2 d-md-block'>
                  <a 
                    href="/shopnow" 
                    className="btn btn-dark btn-sm" 
                    style={{ 
                      height: '40px', 
                      width: '100px', 
                      display: 'inline-block', 
                      verticalAlign: 'middle', 
                      padding: '0.375rem 0.75rem', 
                      fontSize: '1rem', 
                      lineHeight: '1.5', 
                      borderRadius: '0.25rem', 
                      textAlign: 'center', 
                      whiteSpace: 'nowrap', 
                      userSelect: 'none', 
                      border: '1px solid transparent',
                      transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                    }}
                  >
                    Shop Now
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
