import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
  // mostrar la contrasenia
  const [isVisible, setIsVisible] = useState(false)
  const visible = () => {
    setIsVisible(!isVisible)
  }
  // obtener usuario
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const submit = (data) => {
    axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
      .then(res => {
        navigate('/')
        localStorage.setItem('token', res.data.data.token)
      }
      )
      .catch((error) => {
        if (error.response?.status === 404) { // 404
          alert("Credenciales incorrectas");
        } else {
          console.log(error.response?.data);
        }
      })
  }

  return (
    <>
      <Link to='/' className='back'><i class="fa-solid fa-arrow-left"></i></Link>
      <main className='login_container'>
        <section className='login_form'>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Hello again!</h2>
          <p style={{ fontSize: '0.9rem', marginBottom: '30px' }}>welcome back you've been missed!</p>
          <section className="example">
            <div className="example_text">
              <h3>This API requires Bearer type token authentication in order to consume the
                 “/cart” and “/purchases” endpoints. To practice, you can log in with:
              </h3>
              <p>Email: john@gmail.com <br /> Password: john1234</p>
            </div>
          </section>
          <form className='form' onSubmit={handleSubmit(submit)}>
            <section className='form_input'>
              <label htmlFor="#">E-mail</label>
              <input type="text"  {...register("email")} className='width' />
            </section>
            <section className='form_input'>
              <label htmlFor="#">Password</label>
              <div className="password">
                {
                  <input type={isVisible ? 'password' : 'text'} {...register("password")} />
                }
                <i className="fa-solid fa-eye" onClick={visible}></i>
              </div>
            </section>
            <button type="submit">Sign up</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;