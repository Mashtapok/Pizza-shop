import React from "react";
import styles from "./CartPage.module.css";

type CartItemProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    count: number
}

export const CartItem: React.FC<CartItemProps> = ({id, title, price, description, image, count}) => {
    return (
        <div className="row">
            <div className="col s12 m12 l12">
                <div className={styles.line}>
                    <div className={styles.line_image}>
                        <img src={image} alt={title}/>
                    </div>
                    <div className={styles.line_product}>
                        <div className={styles.product_title}>{title}</div>
                        <div className={styles.product_description}>{description}</div>
                    </div>
                    <div className={styles.line_control}>
                        <button className={styles.button_control}><i className="material-icons">add</i></button>
                        <span className={styles.counter}>{count}</span>
                        <button className={styles.button_control}><i className="material-icons">remove</i></button>
                    </div>
                    <div className={styles.line_price}>
                        <span>{price}</span>
                        <span className={styles.currency}>₽</span>
                    </div>
                    <div className={styles.line_delete}>
                        <i className="material-icons ">delete</i>
                    </div>
                </div>
            </div>
        </div>
    );
};