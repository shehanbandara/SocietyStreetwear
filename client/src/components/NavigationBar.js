import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = ({ click }) => {
    return (
        <nav className="NavigationBar">

            <div className="NavigationBar-logo">
                <h2>Society Streetwear Toronto 🌐</h2>
            </div>

            <ul className="NavigationBar-links">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className='Cart-link'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className='Cart-count'>0</span>
                        </span>
                    </Link>
                </li>
            </ul>

            <div className='SideMenu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default NavigationBar;