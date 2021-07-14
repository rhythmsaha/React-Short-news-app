import React from 'react'
import Sidebar from './Sidebar'
import classes from "./styles/Header.module.css"

const Header = () => {
    return (
        <header className={classes.Header}>
            <Sidebar />
            <span className={classes.Logo}>
                <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="Inshorts" />
            </span>
        </header>
    )
}

export default Header
