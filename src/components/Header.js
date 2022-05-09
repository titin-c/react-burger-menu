import React from 'react'
import useToggle from '../hooks/useToogle';
import { BurguerMenu } from './BurguerMenu';
import { BurguerFooter } from './BurguerFooter';
import { BurguerHeader } from './BurguerHeader';


export const Header = () => {
    const {toggled,setToggle}=useToggle(false)
    
                   
                
    return (
        <>
            <header  className={toggled ? "header-menus" : "header-menus cerrado"} id="header-menus">
                    <BurguerHeader />
                    <BurguerMenu />
                    <BurguerFooter />
            </header>
            <a href="#" className="menu-toggle" id="menuOpen" onClick={() => setToggle(!toggled)}><div className="menu-icon"><span className="line"></span><span className="line"></span><span className="line"></span></div><span>Menú</span></a>
            <div onClick={() => setToggle(!toggled)}  className={toggled ? "capa-off" : "capa-off off"} id="capa-off"></div>
        </>
    )
}