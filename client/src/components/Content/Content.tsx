import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {PizzaPage} from "../PizzaPage/PizzaPage";
import {SnacksPage} from '../SnacksPage/SnacksPage';
import { CartPage } from '../CartPage/CartPage';
import {NotFound} from "../common/NotFound";

export const Content: React.FC = (props:any) => {
    return (
        <main>
            <div className="myContainer">
                <Switch>
                    <Redirect exact from="/" to="/pizza" />
                    <Route path="/pizza" component={PizzaPage}/>
                    <Route path="/snacks" component={SnacksPage}/>
                    <Route path="/cart" component={CartPage}/>

                    <Route component={NotFound}/>
                </Switch>
            </div>
        </main>
    );
};
