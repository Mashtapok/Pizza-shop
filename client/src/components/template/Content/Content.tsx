import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {PizzaPage} from "../../pages/PizzaPage/PizzaPage";
import {SnacksPage} from '../../pages/SnacksPage/SnacksPage';
import { CartPage } from '../../pages/CartPage/CartPage';
import {NotFound} from "../../common/NotFound";

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
