import './CartPage.css';
import CartItem from '../components/CartItem';

const CartPage = () => {
    return (
        <div className="CartPage">
            <div className='CartPage-left'>
                <h2>Your Cart</h2>
                <CartItem />
            </div>
            <div className='CartPage-right'>
                <div className='CartPage-info'>
                    <p>Subtotal</p>
                    <p>$600</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;