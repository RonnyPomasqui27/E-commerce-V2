import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { filterProductsThunk, getProductsThunk } from '../store/slices/products.slice';
import '../styles/home.css'

const Home = () => {

  const [productsCategory, setProductsCategory] = useState([]);
  const dispacth = useDispatch();
  const selector = useSelector(state => state.products);

  useEffect(() => {
    dispacth(getProductsThunk())
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
      .then(res => setProductsCategory(res.data.data.categories))
    // axios.get('https://e-commerce-api.academlo.tech/api/v1/products')
    //   .then(res => setProducts(res.data))
  }, [])

  return (
    <>
      <NavBar />
      <main className='main_container'>
        <section className='carousel'>
          <div className="carousel_img">
            <img src="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/refurb-mbp13touchbar-space-gallery-2018_GEO_JP_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1543302074361" className='carousel-efect' />
          </div>
          <div className="carousel_img first">
            <img src="https://invent.irujul.com/theme/default/img/npi/npi-20/po_iphone_2020.png" className='carousel-efect' />
          </div>
          <div className="carousel_img second">
            <img src="https://www.lg.com/pe/images/cocinas/MD05779555/gallery/medium01.jpg" className='carousel-efect' />
          </div>
        </section>

        <section className='products'>
          <div className='Product_controls'>
            <h3>Category: </h3>
            <div className="categ">
              {
                productsCategory.map(category => (
                  <ul key={category.id}>
                    <li><Link onClick={() => dispacth(filterProductsThunk(category.id))} className='word'>{category.name}</Link></li>
                  </ul>
                ))
              }
            </div>
          </div>
          <div className="products_container">
            {
              selector.map(product => (
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

export default Home;