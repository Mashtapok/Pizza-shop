import React, {useEffect} from 'react';
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

    function handleOpen(event:React.MouseEvent, ref:any):void {
        if (event.target === buttonRef.current) {
            setIsOpen(!isOpen)
        }
        if (event.target === ref.current) {
            setIsOpen(!isOpen)
        }
    }
    const buttonRef = React.useRef(null);

    const isShow = isOpen && !authData.isAuth;
    return (
            <header className="navbar-fixed">
                <nav className="amber lighten-5">
                    <div className="nav-wrapper" style={{padding: "0 2rem"}}>
                        <ul className="left hide-on-small-only">
                            <li><NavLink to="/pizza" className="black-text">Пиццы</NavLink></li>
                            <li><NavLink to="/snacks" className="black-text">Закуски</NavLink></li>
                            <li><NavLink to="/deserts" className="black-text">Десерты</NavLink></li>
                            <li><NavLink to="/drinks" className="black-text">Напитки</NavLink></li>
                        </ul>
                        <a href="#!" className="black-text brand-logo center">KokoPizza</a>
                        <ul className="right hide-on-small-only">
                            {authData.isAuth && <li><NavLink to="/lk" className="black-text">Личный кабинет</NavLink></li>}
                            <li><NavLink to="/cart" className="black-text">Корзина</NavLink></li>
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

                {isShow && <AuthModal login={props.login} handleOpen={handleOpen} />}

            </header>
    );
};
