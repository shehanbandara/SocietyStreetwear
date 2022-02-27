import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Backdrop from './components/Backdrop';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  return (
    <BrowserRouter>
      <NavigationBar click={() => setSideBarToggle(true)} />
      <SideBar show={sideBarToggle} click={() => setSideBarToggle(false)} />
      <Backdrop show={sideBarToggle} click={() => setSideBarToggle(false)} />
      <main className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/product:id" element={<ProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;