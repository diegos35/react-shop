import React, {useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
//import axios from 'axios';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';
const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
			{products.map((product) => (
          		<ProductItem />
       		))}
			</div>
		</section>
	);
}

export default ProductList;
