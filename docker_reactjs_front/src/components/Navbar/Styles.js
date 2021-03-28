const styles = {
    default: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "66px",
        paddingLeft: "30px",
        paddingRight: "50px",
        backgroundColor: "#00b8d4",
        boxShadow: "0px 6px 8px -5px rgba(0,0,0,0.64)",
    },
    menuLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menuLeftItem: {
        cursor: "pointer",
        position: "relative",
        marginRight: "30px"
    },
    menuRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menuRightItem: {
        cursor: "pointer",
        position: "relative",
        marginRight: "30px"
    },
    circleHoverMDIcon: {
        position: "absolute",
        top: "-7px",
        left: "-8px",
        borderRadius: "50%",
        height: "53px",
        width: "53px",
    },
    circleHoverCustomIcon: {
        position: "absolute",
        top: "-11px",
        left: "-11px",
        borderRadius: "50%",
        height: "53px",
        width: "53px",
    },
    sidenavOpen: {
        height: "100%", /* 100% Full-height */
        width: "250px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "1", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#ffffff", /* white */
        overflowX: "hidden", /* Disable horizontal scroll */
        paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.25s" /* 0.5 second transition effect to slide in the sidenav */
    },
    sidenavClose: {
        height: "100%", /* 100% Full-height */
        width: "0px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "1", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#ffffff", /* white */
        overflowX: "hidden", /* Disable horizontal scroll */
        paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.25s" /* 0.5 second transition effect to slide in the sidenav */
    },
    sidenavOpen_a: {
        padding: "8px 8px 8px 20px",
        textDecoration: "none",
        fontSize: "16px",
        color: "#818181",
        display: "block",
        transition: "0.3s",
    },
    sidenavOpen_a_custom: {
        padding: "8px 8px 8px 18px",
        textDecoration: "none",
        fontSize: "16px",
        color: "#818181",
        display: "block",
        transition: "0.3s",
    },
    sidenavOpen_closebtn: {
        padding: "8px 8px 8px 32px",
        textDecoration: "none",
        color: "#818181",
        display: "block",
        transition: "0.3s",
        position: "absolute",
        top: "0",
        right: "25px",
        fontSize: "36px",
        marginLeft: "50px",
        cursor: "pointer"
    },
    sideNavItemMDIcon: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "15px",
        height: "60px"
    },
    sideNavItemMDIconSize: {
        width: "40px"
    },
    sideNavItemCustomIcon: {
        display: "flex",
        paddingLeft: "21px",
        flexDirection: "row",
        alignItems: "center",
        height: "60px"
    },
    tooltipMDIcon: {
        position: "absolute",
        left: "-35px",
        top: "60px",
        height: "20px",
        width: "100px",
        color: "white",
        borderRadius: "3px",
        textAlign: "center",
        padding: "5px",
        backgroundColor: "#263238",
        opacity: "0.9",
        transition: "0.4s ease",
        zIndex: "1"
    },
    tooltipMDIconHidden: {
        visibility: "hidden",
        position: "absolute",
        left: "-35px",
        top: "45px",
        height: "20px",
        width: "100px",
        color: "white",
        borderRadius: "3px",
        textAlign: "center",
        padding: "5px",
        backgroundColor: "#263238",
        opacity: "0.1",
        transition: "0.4s ease",
        zIndex: "1"
    },
    tooltipCustomIcon: {
        position: "absolute",
        left: "-35px",
        top: "57px",
        height: "20px",
        width: "100px",
        color: "white",
        borderRadius: "3px",
        textAlign: "center",
        padding: "5px",
        backgroundColor: "#263238",
        opacity: "0.9",
        transition: "0.4s ease"
    },
    tooltipCustomIconHidden: {
        visibility: "hidden",
        position: "absolute",
        left: "-35px",
        top: "45px",
        height: "20px",
        width: "100px",
        color: "white",
        borderRadius: "3px",
        textAlign: "center",
        padding: "5px",
        backgroundColor: "#263238",
        opacity: "0.1",
        transition: "0.4s ease"
    }
}

export default styles;