import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import all01 from "../assets/images/All/all01.jpg"

const Home = () => {
  return (
    <>
      <section className='banner'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img className="all__image" src={all01} alt='all01'></img>
            </Col>
            <Col lg="6" md="6">
              <div className='banner__content'>
                <p className='banner__subtitle'> loremhjdsvgkhj dsuivkg uj ujdvshk.</p>
                <h1>All your Home needs at one place</h1>
                <p>lorejdsbkf jsdfghvkk.hjhgsdvfbc khgsdv bjvvvvjvjvjvjvjvjvjvjvvvvvvjvvvvvvv ksd,hvg dugjskv</p>
                <button className='banner__shop__btn'>Shop Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home