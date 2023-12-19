import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h2 >
                <span className='text-5xl font-bold text-purple-700'>{price.price}</span>
                <span className='text-3xl text-orange-400'> /mon</span>
            </h2>
            <h1 className='text-2xl font-bold'> {price.name}</h1>
        </div>
    );
};

export default PriceCart;