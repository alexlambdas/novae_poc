import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

import { ROUTES, LINKS } from "../../resources/Routes";
import styles from "./Styles";
import "../../index.css";

function Navbar(props){

    const {openNav, handleOpenNav} = props;

    const handleOpenAndCloseNav = () => handleOpenNav();

    const sideNavItems = (
        <>
            <div style={styles.sidenavOpen_closebtn} onClick={handleOpenAndCloseNav}>
                <MaterialIcon icon="close" color="#616161" size="medium"/> 
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="home" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_MAIN}>
                            Principal
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="person_pin" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_GET_ALL_USERS}>
                            Usuarios
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="add_box" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_CREATE_USER}>
                            Crear Usuario
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="update" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_UPDATE_USER}>
                            Actualizar Usuario
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="credit_card" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_GET_ALL_CREDIT_CARDS}>
                            Tarjetas de Crédito
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="add_box" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_CREATE_CREDIT_CARD}>
                            Crear Tarjeta
                    </Link>
            </div>
            <div 
                style={styles.sideNavItemMDIcon} 
                className="sidenav_item"
                onClick={handleOpenAndCloseNav}>
                    <div style={styles.sideNavItemMDIconSize}>
                        <MaterialIcon icon="update" color="#00b8d4" size="medium"/>
                    </div>
                    <Link 
                        style={styles.sidenavOpen_a} 
                        to={ROUTES.ROUTE_UPDATE_CREDIT_CARD}>
                            Actualizar Tarjeta
                    </Link>
            </div>
        </>
    )

    const sideNavOpen = (
        <div style={styles.sidenavOpen}>
            {sideNavItems}
        </div>
    )

    const sideNavClose = (
        <div style={styles.sidenavClose}>
            {sideNavItems}
        </div>
    )

    return(
        <nav style={styles.default}>
            {openNav ? sideNavOpen : sideNavClose}
            <div style={styles.menuLeft}>
                <div style={styles.menuLeftItem} onClick={handleOpenAndCloseNav}>
                    <MaterialIcon icon="menu" color="#FAFAFA" size="medium"/>   
                    <div style={styles.circleHoverMDIcon} className="circle_hover"></div>
                </div>
            </div>
            <div style={styles.menuRight}>
            
            </div>
        </nav>
    )
}

export default Navbar;