import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import './Login.scss';

export const Login = () => {

    const {setUser, user} = useContext(UserContext);

    return (
        <div className="container login">
           {!user ? <h1>Login</h1> : <h1>Logout</h1> }
           {!user && <button className="btn btn-primary sign-up" onClick={ () => setUser({id: 1, name: 'isis3710'})}>Sign up</button>}
           {user && <button className="btn btn-warning" onClick={ () => setUser(null)}>Logout</button>}
           <pre>{user ? JSON.stringify(user) : 'No data'}</pre> 
        </div>
    )
}
