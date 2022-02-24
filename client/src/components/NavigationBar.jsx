import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'>Left</div>
                <div className='Center'>Center</div>
                <div className='Right'>Right</div>
            </div>
        </div>
    );
};

export default NavigationBar;