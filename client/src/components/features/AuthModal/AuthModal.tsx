import React, {ChangeEventHandler, useEffect} from 'react';
import styles from './AuthModal.module.css';
import {useHttp} from "../../../hooks/http.hook";
import { useMessage, useSuccessMessage } from '../../../hooks/message.hook';

type Props = {
    handleOpen: (event: React.MouseEvent, ref: any) => void,
    login: (jwtToken:string, id:string) => void
}


export const AuthModal: React.FC<Props> = (props) => {
    const message = useMessage();
    const successMessage = useSuccessMessage();
    const {loading, error, request, clearError} = useHttp();

    const [form, setForm] = React.useState({
        email: "", password: ""
    });
    const refModalContainer = React.useRef(null);

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    function changeHandler(event: any): void {
        setForm({...form, [event.target.name]: event.target.value})
    }

    async function registerHandler() {
        try {
            const data = await request(
                '/api/auth/register',
                'POST',
                {...form});
            if(data.message === "Пользователь создан") {
                successMessage(data.message)
            }
        } catch (error) {}
    }

    async function loginHandler() {
        try {
            const data = await request(
                '/api/auth/login',
                'POST',
                {...form});
            props.login(data.token, data.userId);
        } catch (error) {}
    }

    return (
        <div className={styles.modalContainer} ref={refModalContainer}
             onMouseDown={(event) => props.handleOpen(event, refModalContainer)}>
            <form className={styles.modal}>
                <div className={styles.header}>
                    <h1>Вход на сайт</h1>
                </div>
                <div className={styles.body}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   className="validate"
                                   autoFocus
                                   onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   className="validate"
                                   onChange={changeHandler}
                            />
                            <label htmlFor="password">Пароль</label>
                        </div>
                    </div>
                </div>
                <button type="button"
                        onClick={loginHandler}
                        disabled={loading}
                        className="waves-effect orange darken-4 waves-light btn"
                >Войти
                </button>
                <button type="button"
                        onClick={registerHandler}
                        disabled={loading}
                        className="waves-effect orange darken-3 btn btn_register"
                >Регистрация
                </button>
            </form>
        </div>
    );
};
