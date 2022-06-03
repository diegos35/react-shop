import {useEffect, useState} from 'react';
import axios from 'axios';

//funcion que vamos a exportar
const useGetProducts = (API) =>{
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const response = await axios(API);
        setProducts(response.data);
      }
    
      useEffect(() => {
        fetchData();
      }, []);
      //o tambien asi 
    /*  useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
        }
        fetchData();
    }, []); */

    return products;     
};

export default useGetProducts;