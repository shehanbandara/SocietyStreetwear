import './SideBar.css';
import { Link } from 'react-router-dom';


const SideBar = ({ show, click }) => {
    const sideBarClass = ['SideBar'];

    if (show) {
        sideBarClass.push('show');
    }

    return (
        <div className={sideBarClass.join(" ")}>
            <ul className='SideBar-links' onClick={click}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className='Sidebar-cartCount'>0</span>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;