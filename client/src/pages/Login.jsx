import {useLogin} from '../context/LoginContext';
import {useEffect} from 'react';

function Login() {

    const {LoginUser, getRolUser} = useLogin();

    useEffect(()=>{
        getRolUser();
    }, []);

    return (
        <LoginUser />
    )
}

export default Login