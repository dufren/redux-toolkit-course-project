import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'

const Products = () => {
    const { products } = useSelector((store) => store.product);
  return (
    <section className='cart'>
      <header>
        <h2>store</h2>
      </header>
      <div>
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      </section>
  )
}

export default Products