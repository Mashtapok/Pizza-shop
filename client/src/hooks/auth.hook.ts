import {useState, useCallback, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAuthData} from "../Redux/actions/authActions";

const storageName:string = "userData";

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const dispatch = useDispatch();

    const login = useCallback((jwtToken:string, id:string):void => {
        setToken(jwtToken);
        setUserId(id);
        const isAuth = !!jwtToken;
        const authData = {userId:id, token:jwtToken,isAuth};

        localStorage.setItem(storageName, JSON.stringify({
            userId:id ,token: jwtToken
        }));
        dispatch(setAuthData(authData))
    },[]);

    const logout = useCallback(():void => {
        setToken(null);
        setUserId(null);

        localStorage.removeItem(storageName);

        const authData = {userId:null, token: null, isAuth:false};
        dispatch(setAuthData(authData))
    },[]);

    useEffect(() => {
        const  data = JSON.parse(<string>localStorage.getItem(storageName));

        if(data && data.token) {
            login(data.token, data.userId);
        }
    }, [login]);

    return {login, logout, token, userId}
};