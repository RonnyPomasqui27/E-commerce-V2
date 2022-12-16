import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Products from './pages/Products'
import { useSelector } from 'react-redux'
import IsLoading from './components/IsLoading'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <HashRouter>
        {
          isLoading && <IsLoading />
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
          </Route>
          <Route path='/products/:id' element={<Products />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
