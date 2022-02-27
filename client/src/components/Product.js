import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className='Product'>
            <Link to={`/product/${1234}`} className='Product-link'>
                <img src='https://www.nicekicks.com/files/2021/11/A-Ma-Maniere-Air-Jordan-1-High-OG-DO7097-100-Lead2.jpg' alt='Jordan 1 A Ma Maniere' />
                <div className='Product-info'>
                    <p className='Product-info-name'>Jordan 1 A Ma Maniere</p>
                    <p className='Product-info-size'>Size: 11</p>
                    <p className='Product-info-condition'>Condition: 10/10 Deadstock</p>
                    <p className='Product-info-price'>Price: $600</p>
                </div>
            </Link>
        </div>
    );
};

export default Product;