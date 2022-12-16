import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/cart.css'
const Cart = () => {

  const selector = useSelector(state => state.cart)

  return (
    <main className='cart_container'>
      <section className='cart'>
        {
          selector.map(item => (
            <div className="cart_info" key={item.id}>
              <h2>{item.title}</h2>
              <div className="cart_price">
                <p>${item.price}</p>
                <div className="status">
                  <div className="boll"></div>
                  <p>{item.status}</p>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </main>
  );
};

export default Cart;