import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="page-footer amber lighten-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="black-text">Pizza</h5>
                        <p className="black-text text-lighten-4">О нас</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container black-text">
                    © 2020 Copyright by Mashtapok
                </div>
            </div>
        </footer>
    );
};
