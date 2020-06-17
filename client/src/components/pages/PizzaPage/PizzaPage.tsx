import React, {useCallback, useEffect, useState} from 'react';
import {ProductCard} from '../../common/ProductCard';
import styles from "./PizzaPage.module.css";
import {useHttp} from "../../../hooks/http.hook";
import { ProductType } from '../../../types/types';
import {Filters} from "../../common/Filters/Filters";

export const PizzaPage: React.FC = () => {
    const {request, loading} = useHttp();
    const [state, setState] = useState({
        pizzas: [] as Array<ProductType>
    });

    const getPizzas = useCallback(async () => {
        try {
            const data = await request('/api/pizzas', 'GET', null);
            setState({pizzas: data})
        } catch (e) {
            console.error(e)
        }
    }, []);

    useEffect(() => {
        getPizzas();
    }, []);

    const skeletons = Array(6).fill(0).map(item => (
        <div className="col s12 m4 l3">
            <ProductCard id={1}
                         title={"Вкусная пицца"}
                         price={299}
                         description={"Описание самой вкусной пиццы"}
                         image={"https://cdn.dodostatic.net/site-static/dist/fdb09565b56cb9ae35ac.svg"}

            />
        </div>
    ));

    if (loading) {
        return <div>
            <div className="header">
                <h3>Пиццы</h3>
            </div>
            <div className="row">
                {skeletons}
            </div>
        </div>
    }

    return (
        <div>
            <div className="header">
                <h3>Пиццы</h3>
            </div>
            <div>
                <Filters />
            </div>
            <div className="row">
                {state.pizzas.map((pizza) => (
                    <div className="col s12 m4 l3" key={pizza.id}>
                        <ProductCard id={pizza.id}
                                     title={pizza.title}
                                     price={pizza.price}
                                     description={pizza.description}
                                     image={pizza.image}

                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
