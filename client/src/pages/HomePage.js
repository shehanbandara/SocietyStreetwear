import './HomePage.css';
import Product from '../components/Product';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <h2 className='HomePage-title'>Products</h2>
            <div className='HomePage-products'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default HomePage;