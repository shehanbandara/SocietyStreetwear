import './ProductPage.css';

const ProductPage = () => {
    return (
        <div className="ProductPage">
            <div className='ProductPage-left'>
                <div className='Left-image'>
                    <img src='https://www.nicekicks.com/files/2021/11/A-Ma-Maniere-Air-Jordan-1-High-OG-DO7097-100-Lead2.jpg' alt='Jordan 1 A Ma Maniere' />
                </div>
                <div className='Left-info'>
                    <p className='Left-info-name'>Jordan 1 A Ma Maniere</p>
                    <p className='Left-info-size'>Size: 11</p>
                    <p className='Left-info-condition'>Condition: 10/10 Deadstock</p>
                    <p className='Left-info-price'>$600</p>
                </div>
            </div>
            <div className='ProductPage-right'>
                <div className='Right-info'>
                    <p className='Right-info-price'>
                        Price:
                        <span>$600</span>
                    </p>
                    <p className='Right-info-status'>
                        Status:
                        <span>In Stock</span>
                    </p>
                    <p className='Right-info-quantity'>
                        Quantity:
                        <select>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;