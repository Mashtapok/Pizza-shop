import React, {useState} from "react";
import styles from "./ProductCard.module.css";
import {useDispatch} from "react-redux";
import {addToCart, getTotalPriceActionType} from "../../Redux/actions/cartActions";
import {CartItemType, ProductType} from "../../types/types";

type PropsType = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

export const ProductCard:React.FC<PropsType> = ({id, title, price, description, image}) => {
    const item = {id, title, price, description, image};
    const dispatch = useDispatch();

    const [count, setCount] = useState(0);

    function decrease(count: number) {
        if (count === 0) {
            return 0;
        } else {
            setCount(count - 1);
        }
    }

    const addHandler = (item: ProductType, count: number): void => {
        const {id} = item;
        let cartItem: CartItemType = {...item, count} as CartItemType;
        dispatch(addToCart(cartItem));
        dispatch(getTotalPriceActionType(id));
        setCount(0);
    };

    return (
        <div className="card">
            <div className="card-image">
                <a className="btn-floating minus-btn waves-effect waves-light red"
                   onClick={() => decrease(count)}
                ><i className="material-icons">remove</i></a>
                <img src={image}/>
                <a className="btn-floating halfway-fab waves-effect waves-light red"
                   onClick={() => setCount(count + 1)}
                ><i className="material-icons">add</i></a>
                <span className={styles.counter}>{count ? `${count}шт` : <p>Добавьте</p>}</span>
            </div>
            <div className="card-content">
                <div><span className="card-title">{title}</span></div>
                <div className={styles.cardDescriptionBlock}><p className={styles.cardDescription}>{description}</p>
                </div>
                <div className={styles.cardButtonBlock}>
                    <div><span className={styles.price}>{price}</span><span className={styles.currency}>₽</span></div>
                    <a className="red waves-effect waves-light btn-small"
                                                           onClick={() => addHandler(item, count)}
                ><i className="material-icons right">shopping_cart</i>В корзину</a></div>
            </div>
        </div>
    );
};