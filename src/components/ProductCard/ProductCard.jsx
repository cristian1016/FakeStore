// ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css';
import { Header } from '../Header/Header';
// import { Counter } from '../Counter/Counter';


const ProductCard = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  const maxLength = 0; // Longitud máxima de la descripción a mostrar inicialmente

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };



  const [count, setCount] = useState(0)

  const incrementar = () => setCount(count + 1)
  //const disminuir = () => setCount(count -1)

  return (
    <>
    {/* <Header count={count} /> */}
      <div className="card">
        <img src={product.image} alt="Imagen del producto" />
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p className={`description ${showDescription ? 'expanded' : ''}`}>
          {showDescription ? product.description : `${product.description.slice(0, maxLength)}...`}
        </p>
        <button className="read-more" onClick={toggleDescription}>
          {showDescription ? 'Leer menos' : 'Leer más'}
        </button>
        <p className="price">${product.price}</p>

        <div>
          <button onClick={incrementar}>+</button>
          <p>{count}</p>
          {/* <button onClick={disminuir}>-</button>    */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
// export {incrementar};