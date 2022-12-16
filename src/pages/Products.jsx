import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { addCartThunk } from '../store/slices/cart.slice';
import { getProductsThunk } from '../store/slices/products.slice';
import '../styles/products.css'

const Products = () => {

  const { id } = useParams();
  const dispacth = useDispatch();
  const [amount, setAmount] = useState('')

  useEffect(() => {
    dispacth(getProductsThunk());
  }, []);

  const product = useSelector(state => state.products);
  const selectProduct = product?.find(newProduct => newProduct.id === Number(id));
  const relateProduct = product?.filter(newItem => newItem.category?.id === selectProduct.category?.id)

  const add = () => {
    const addToCart = {
      id: selectProduct?.id,
      quantity: amount
    }
    console.log(addToCart)
    dispacth(addCartThunk(addToCart))
  }


  return (
    <>
      <NavBar />
      <main className='Products_container'>
        <section className='product_container'>
          <div className="product_imgs">
            <div className="img_selec">
              <img src={selectProduct?.productImgs?.[0]} alt="" className='prdt_img' />
              <img src={selectProduct?.productImgs?.[1]} alt="" className='prdt_img' />
              <img src={selectProduct?.productImgs?.[2]} alt="" className='prdt_img' />
            </div>
            <img src={selectProduct?.productImgs?.[0]} alt="" className='img_pdt' />
          </div>
          <div className="product_description">
            <h2>{selectProduct?.title}</h2>
            <p>{selectProduct?.description}</p>
            <p>Price: ${selectProduct?.price}</p>
            <div className="buy_container">
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
              <button onClick={add}>
                Comprar
              </button>
            </div>
          </div>
        </section>

        <section className='relation_container'>
          <div className="relation">
            {
              relateProduct.map(product => (
                <div className="products_info" key={product.id}>
                  <div className="product_img" style={{ background: `url('${product.productImgs[0]}')`, objectFit: 'contain', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'color-burn' }}>
                    <img src={product.productImgs[1]} alt="" className='img' />
                  </div>
                  <Link to={`/products/${product.id}`} className="product_descri">
                    <div className="raya"></div>
                    <div className="text">
                      <h3>{product.title}</h3>
                      <p>Price: ${product.price}</p>
                    </div>
                    <div className="status">
                      <div className="boll"></div>
                      <p>{product.status}</p>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </section>
      </main>
      <footer>
        <section className='footer_container'>
          <div className=' icon'>
            <a href="https://github.com/RonnyPomasqui27" target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/pomasqui-ronny-46ab6a219/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <p>ronny27pch@gmail.com</p>
        </section>
      </footer>
    </>
  );
};

export default Products