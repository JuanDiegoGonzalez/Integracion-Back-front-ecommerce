import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext} from '../../context/UserContext';
import './Navbar.scss'

export const Navbar = () => {

    const {user} = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MarketPlace</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="navbar-nav-links">
                        <Link className="nav-link active" aria-current="page" to="/list">Gallery</Link>
                        <Link className="nav-link active" aria-current="page" to="/todos">TODOs</Link>
                    </div>
                    <div className="navbar-nav-controls">
                        <Link className="nav-link" to="/login">{user ? `Hello, ${user.name}`: 'Login' }</Link>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
