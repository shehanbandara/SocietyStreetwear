import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className="CartItem">
            <div className='CartItem-image'>
                <img src='https://www.nicekicks.com/files/2021/11/A-Ma-Maniere-Air-Jordan-1-High-OG-DO7097-100-Lead2.jpg' alt='Jordan 1 A Ma Maniere' />
            </div>
            <Link to={`/product:${1234}`} className='CartItem-name'>
                <p>Jordan 1 A Ma Maniere</p>
            </Link>
            <p className='CartItem-price'>$600</p>
            <select className='CartItem-quantity'>
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
            <button className='CartItem-delete'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default CartItem;