import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="app">
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;