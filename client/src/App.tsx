import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Content} from "./components/Content/Content";
import {useAuth} from "./hooks/auth.hook";

const App: React.FC = () => {
    const {login, logout} = useAuth();
    return (
        <>
            <Header login={login} logout={logout}/>
            <Content/>
            <Footer/>
        </>
    );
};


export default App;
