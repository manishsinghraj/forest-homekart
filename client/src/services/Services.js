import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import serviceData from "../assets/data/services"


const Services = () => {
    return (
        <>
            <section className='services'>
                <Container>
                    <Row>
                        {
                            serviceData.map((items, index) => (
                                <Col lg="3" md="4" key={index}>
                                    <div className='services__items'>
                                        {React.cloneElement(items.icon, { className: 'services__items__icons' })}
                                        <div>
                                            <h3>{items.title}</h3>
                                            <p>{items.desc}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                        {/* <Col lg="3" md="4">
                            <div className='services__items'>
                                <span >
                                    <FaTruck className='services__items__icons' />
                                </span>
                                <div>
                                    <h3>Free Shipping</h3>
                                    <p>Description</p>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services