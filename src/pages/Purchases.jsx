import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import '../styles/purchases.css'
const Purchases = () => {
  const select = useSelector(state => state.products)

  return (
    <>
      <NavBar />
      <main className='purchases'>
    <p>este es una muestra de como se verian los productos </p>
        <section className='purchases_container'>
          <div className="puschases_content">
            <img src="https://mobilestore.ec/wp-content/uploads/2022/09/iPhone-14-Pro-Deep-Purple-Mobile-Store-Ecuador-768x768.jpg" alt="" className='purs_img' />
            <div className="purchases_info">
              <h3>{select[8]?.title}</h3>
              <div className="xd">
                <p>${select[8]?.price}</p>
                <div className="status">
                  <div className="boll"></div>
                  <p>{select[8]?.status}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='purchases_container'>
          <div className="puschases_content">
            <img src="https://mobilestore.ec/wp-content/uploads/2022/09/iPhone-14-Pro-Deep-Purple-Mobile-Store-Ecuador-768x768.jpg" alt="" className='purs_img' />
            <div className="purchases_info">
              <h3>{select[8]?.title}</h3>
              <div className="xd">
                <p>${select[8]?.price}</p>
                <div className="status">
                  <div className="boll"></div>
                  <p>{select[8]?.status}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='purchases_container'>
          <div className="puschases_content">
            <img src="https://mobilestore.ec/wp-content/uploads/2022/09/iPhone-14-Pro-Deep-Purple-Mobile-Store-Ecuador-768x768.jpg" alt="" className='purs_img' />
            <div className="purchases_info">
              <h3>{select[8]?.title}</h3>
              <div className="xd">
                <p>${select[8]?.price}</p>
                <div className="status">
                  <div className="boll"></div>
                  <p>{select[8]?.status}</p>
                </div>
              </div>
            </div>
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

export default Purchases;