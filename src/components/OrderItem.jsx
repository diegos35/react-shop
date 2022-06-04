import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import closeImage from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = () => {
	const {state} = useContext(AppContext); //obtnemos el state 
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={closeImage} alt="close" />
		</div>
	);
}

export default OrderItem;
