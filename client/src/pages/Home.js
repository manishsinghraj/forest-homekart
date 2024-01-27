import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import all01 from "../assets/images/All/all01.jpg"
import { Link } from "react-router-dom";
import Services from "../services/Services"
import TrendingProductList from '../components/UI/TrendingProductList';
import products from '../assets/data/products';

const Home = () => {


  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) =>
      item.trendingProduct === true
    );

    const filteredBestSalesProducts = products.filter((item) =>
      item.bestSaleProduct === true
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);


  return (
    <>
      <section className='banner'>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img className="all__image" src={all01} alt='all01'></img>
            </Col>
            <Col className="banner_info" lg="6" md="6">
              <div className='banner__content'>
                <p className='banner__subtitle'> loremhjdsvgkhj dsuivkg uj ujdvshk.</p>
                <h1>All your Home needs at one place</h1>
                <p>lorejdsbkf jsdfghvkk.hjhgsdvfbc khgsdv bjvvvvjvjvjvjvjvjvjvjvvvvvvjvvvvvvv ksd,hvg dugjskv</p>
                <Link to="/shop">
                  <button className='banner__shop__btn'>Shop Now</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services></Services>

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className='trending__products-heading'>Trending Products</h2>
            </Col>
            <TrendingProductList trendingProducts={trendingProducts} />
          </Row>
        </Container>
      </section>


    </>
  )
}

export default Home