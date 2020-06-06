import React from "react";
import styles from "./CartPage.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import { CartItem } from "./CartItem";

export const CartPage = () => {
    const items = useSelector((state:RootState) => state.cart.items);
    return (
        <div className="cart">
            <div className="header">
                <h3>Корзина</h3>
            </div>
            <div className={styles.cart__list}>
                {items.map(item => <CartItem id={item.id} title={item.title} price={item.price}
                                             description={item.description}
                                             image={item.image} count={item.count}/>)}
            </div>
        </div>
    );
};