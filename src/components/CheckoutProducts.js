import React from 'react';
import { useStateValue } from '../StateProvider';
import './CheckoutProducts.css';
import FlipMove from 'react-flip-move';

function CheckoutProducts({ id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <FlipMove>
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                
            </div>
        </div>
        </FlipMove>
    )
}

export default CheckoutProducts;
