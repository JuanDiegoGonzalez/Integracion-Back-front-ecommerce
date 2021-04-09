import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Login } from '../pages/login/Login';
import { ProductList } from '../pages/product-list/ProductList';
import { Navbar} from '../components/nav/Navbar';
import { ProductDetail} from '../pages/product-detail/ProductDetail';
import { TodoApp } from '../components/use-reducer-example/TodoApp';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <ProductList />
                </Route>
                <Route exact path="/list">
                    <ProductList />
                </Route>
                <Route exact path="/list/:id">
                    <ProductDetail />
                </Route>
                <Route exact path="/todos">
                    <TodoApp />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}
