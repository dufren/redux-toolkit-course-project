import React from 'react'
import { ChevronLeft, ChevronRight } from '../icons';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../features/cart/cartSlice'
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { increase, decrease, removeItem } from '../features/cart/cartSlice';

const Product = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart)
    const inCart = cart.cartItems.some((item) => item.id === id);
    const item = cart.cartItems.find((item) => item.id === id);

    const clickHandle = () => {
        dispatch(add({ id, img, title, price, amount }))
        alertify
            .alert("Redux Toolkit", "Product added to the cart", function () {
            });
    }

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {!inCart
                    ? <button className='remove-btn' onClick={clickHandle}>
                        add
                    </button>
                    :
                    <article className='product-item'>
                        <div className='product-container'>
                            <button
                                className='amount-btn'
                                onClick={() => {
                                    if (item.amount === 1) {
                                        dispatch(removeItem(id));
                                        return;
                                    }
                                    dispatch(decrease({ id }));
                                }}
                            >
                                <ChevronLeft />
                            </button>
                            <p className='amount'>{item.amount}</p>
                            <button
                                className='amount-btn'
                                onClick={() => {
                                    dispatch(increase({ id }));
                                }}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </article>
                }
            </div>
        </article>
    )
}

export default Product


