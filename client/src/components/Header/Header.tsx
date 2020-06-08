import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthModal } from '../AuthModal/AuthModal';
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";

type Props = {
    login: (jwtToken:string, id:string) => void,
    logout: () => void
}

export const Header: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const authData = useSelector((state:RootState) => state.auth);
    const totalCartPrice = useSelector((state:RootState) => state.cart.totalPrice);

    function handleOpen(event:React.MouseEvent, ref:any):void {
        if (event.target === buttonRef.current || mobileButtonRef.current) {
            setIsOpen(!isOpen)
        }
        if (event.target === ref.current) {
            setIsOpen(!isOpen)
        }
    }
    const buttonRef = React.useRef(null);
    const mobileButtonRef = React.useRef(null);

    let toggler:HTMLLinkElement | null = document.querySelector('.sidenav-trigger');
    toggler && toggler.addEventListener('click', () => {
        let elem = document.querySelector('.sidenav');
        // @ts-ignore
        let instances = M.Sidenav.init(elem);
        instances.open()
    });

    const isShow = isOpen && !authData.isAuth;
    return (
            <header className="navbar-fixed">
                <nav className="amber lighten-5">
                    <div className="nav-wrapper" style={{padding: "0 2rem"}}>
                        <ul className="left hide-on-med-and-down">
                            <li><NavLink to="/pizza" className="black-text">Пиццы</NavLink></li>
                            <li><NavLink to="/snacks" className="black-text">Закуски</NavLink></li>
                            <li><NavLink to="/drinks" className="black-text">Напитки</NavLink></li>
                        </ul>

                        <a data-target="mobile-menu" className="black-text sidenav-trigger"><i
                            className="material-icons">menu</i></a>

                        <a className="black-text brand-logo center">KokoPizza</a>
                        <ul className="right hide-on-med-and-down">
                            {authData.isAuth && <li>
                                <NavLink to="/lk" className="black-text">Личный кабинет</NavLink></li>}
                            <li>
                                <NavLink to="/cart" className="orange-text darken-4">Корзина</NavLink>
                                {totalCartPrice && <span className="totalCartPrice">{totalCartPrice}₽</span>}
                            </li>
                            {authData.isAuth
                                ? <li><a className="waves-effect orange darken-4 waves-light btn"
                                                      onClick={() => props.logout()}>Выйти</a></li>
                                : <li><a className="waves-effect orange darken-4 waves-light btn"
                                         ref={buttonRef}
                                         onClick={(event) => handleOpen(event, buttonRef)}>Войти</a></li>
                            }
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-menu">
                    <li><NavLink to="/pizza" className="black-text">Пиццы</NavLink></li>
                    <li><NavLink to="/snacks" className="black-text">Закуски</NavLink></li>
                    <li><NavLink to="/drinks" className="black-text">Напитки</NavLink></li>
                    <li>
                        <NavLink to="/cart" className="orange-text darken-4">Корзина</NavLink>
                    </li>
                    {authData.isAuth && <li>
                        <NavLink to="/lk" className="black-text">Личный кабинет</NavLink></li>}
                    {authData.isAuth
                        ? <li><a className="waves-effect orange darken-4 waves-light btn"
                                 onClick={() => props.logout()}>Выйти</a></li>
                        : <li><a className="waves-effect orange darken-4 waves-light btn"
                                 ref={mobileButtonRef}
                                 onClick={(event) => handleOpen(event, mobileButtonRef)}>Войти</a></li>
                    }
                </ul>

                {isShow && <AuthModal login={props.login} handleOpen={handleOpen} />}

            </header>
    );
};
