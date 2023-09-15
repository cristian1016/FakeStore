//App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import {Header} from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productData = await response.json();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductData();
  }, []);

  return (

    <div className="App">
      <Header/>
      <main>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
      <Footer/>
    </div>
  );
};

export default App;