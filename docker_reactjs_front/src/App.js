import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UpdateCreditCard from "./components/UpdateCreditCard/UpdateCreditCard";
import NewCreditCard from "./components/NewCreditCard/NewCreditCard";
import CreditCards from "./components/CreditCards/CreditCards";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import Mainpage from "./components/Mainpage/Mainpage";
import ErrorCard from "./components/ErrorCard/ErrorCard";

import { ROUTES } from "./resources/Routes";
import styles from "./Styles";

function App() {

    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    const handleOnClickSideNav = (event) => {
        if (openNav) {
            if (parseInt(event.clientX, 10) >= 250) setOpenNav(false);
        }
    }

    return (
        <div style={styles.container_app} onClick={handleOnClickSideNav}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path={ROUTES.ROUTE_ERROR}
                        render={() => {
                            return (
                                <ErrorCard
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_UPDATE_CREDIT_CARD}
                        render={() => {
                            return (
                                <UpdateCreditCard
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_CREATE_CREDIT_CARD}
                        render={() => {
                            return (
                                <NewCreditCard
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_GET_ALL_CREDIT_CARDS}
                        render={() => {
                            return (
                                <CreditCards
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_UPDATE_USER}
                        render={() => {
                            return (
                                <UpdateUser
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_CREATE_USER}
                        render={() => {
                            return (
                                <NewUser
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_GET_ALL_USERS}
                        render={() => {
                            return (
                                <Users
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route
                        path={ROUTES.ROUTE_MAIN}
                        render={() => {
                            return (
                                <Mainpage
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav} />
                            )
                        }} />
                    <Route exact path="/">
                        <Redirect to={ROUTES.ROUTE_MAIN} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;