import React from 'react';

const Header = ({ setSidebarOpen }) => {
    const openSidebar = () => {
        setSidebarOpen('sidebar_open')
    }
    const closeSidebar = () => {
        setSidebarOpen('')
    }
    return (
        <div className="header">
            <div className="logo">
                <img src="img/pa/logo.svg" width="32" height="32" alt="logo" />
                <div className="text super_tight">
                    TradeCoinAi
                </div>
            </div>
            <div className="burger_and_lang">
                <div id="lang">
                    <img src="img/pa/flags/usa.png" alt="flag_usa" />
                    <div className="name">
                        English
                    </div>
                    <img width='18' height="10" src="img/pa/flags/arrow_down.png" alt="arrow_down" />
                </div>
                <div id="burger_opener" onClick={openSidebar}>
                    <img width="20" height="20" alt="menu_opener" src="img/pa/burger.svg" />
                </div>
                <div id="burger_closer" onClick={closeSidebar}>
                    <img width="20" height="20" alt="menu_closer" src="img/pa/cross.svg" />
                </div>
            </div>
        </div>
    )
}

export default Header