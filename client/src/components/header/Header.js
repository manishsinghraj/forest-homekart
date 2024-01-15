import React from 'react'

import { Container, Row } from "reactstrap"
import { NavLink } from "react-router-dom"

import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {

  const nav_links = [
    {
      path: "home",
      name: "Home"
    },
    {
      path: "shop",
      name: "Shop"
    },
    {
      path: "cart",
      name: "Cart"
    }
  ];


  return (
    <>
      <header className='header'>
        <Container>
          <Row>
            <div className='nav__wrapper'>

              <div className='nav__logo'>
                <img className='nav__logo__image' src='logo.jpg' alt='logo'></img>
                <div>
                  <h1>Forest HomeCart</h1>
                  <h6>One stop for your Home needs</h6>
                </div>
              </div>

              <div className='navigation'>
                <ul className='navigation__menu'>
                  {
                    nav_links.map((item, index) =>
                    (<li key={index} >
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "navigation__active" : ""}>{item.name}</NavLink>
                    </li>
                    ))
                  }
                </ul>

                <div className='icons'>
                  <span className='icons__cart'><LuShoppingCart />
                    <span className='icons__cart__badge'>20</span>
                  </span>
                  <span className='icons__like'><FaRegHeart />
                    <span className='icons__like__badge'>20</span>
                  </span>
                  <span className='icons__userlogo'><FaRegCircleUser /></span>
                </div>
              </div>

              <div className='mobile__menu'>
                <span><MdOutlineMenu /></span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  )
}

export default Header