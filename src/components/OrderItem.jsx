import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import closeImage from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({product}) => {
	const {state} = useContext(AppContext); //obtnemos el state 
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={closeImage} alt="close" />
		</div>
	);
}

export default OrderItem;
