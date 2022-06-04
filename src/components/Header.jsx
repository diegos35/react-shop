import React, {useState, useContext}from 'react';
import '@styles/Header.scss'; //config de webpack

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import Menu from '@components/Menu';
import AppContext from '../context/AppContext';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const { state } = useContext(AppContext);

	const verifyCart = (cartNumber) => {
		if (cartNumber && (cartNumber > 9)) {
			return"+9";
		  } else {
			  return cartNumber;
		  }
	}

	const handleToggle = () =>{
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 && <div>{verifyCart(state.cart.length)}</div>}
						{/* {state.cart.length && <div>{state.cart.length}</div>} */}
						{/* {state.cart.length > 0 && <div>{state.cart.length}</div>} */}
					</li>
				</ul>
			</div>
			{toggle ? <Menu /> : ""}
		</nav>
	);
}

export default Header;
