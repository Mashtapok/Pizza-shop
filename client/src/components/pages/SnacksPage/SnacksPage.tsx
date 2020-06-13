import React, {useState} from 'react';
import {ProductCard} from "../../common/ProductCard";
import dodsterImage from "../../../assets/images/snacks/dodster.jpg";
import potatoeImage from "../../../assets/images/snacks/potatoe.jpeg";

export const SnacksPage: React.FC = () => {
    const [state, setState] = useState({
        snacks: [
            {id: 1, title: "Додстер", price: 149, description: "Фирменный горячий ролл. Цыпленок, томаты, моцарелла и соус ранч в тонкой пшеничной лепешке", image: dodsterImage },
            {id: 2, title: "Картофель из печи", price: 99, description: "Ароматный запеченный картофель с итальянскими травами. Большая порция", image: potatoeImage },
        ]
    });

    return (
        <div>
            <div className="header">
                <h3>Закуски</h3>
            </div>
            <div className="row">
                {state.snacks.map((snack) => (
                    <div className="col s12 m4 l3">
                        <ProductCard id={snack.id}
                                     title={snack.title}
                                     price={snack.price}
                                     description={snack.description}
                                     image={snack.image}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
