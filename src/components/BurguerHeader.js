import React from 'react'

export const BurguerHeader = () => {
    return (
        <div className='header-logo-container'>
            <a href="#" className="logo" id="logo-header-menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.35 289.74"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M303.21,177.87c-2.07-.07-4.15,0-6.23,0H48.43c-1.89,0-3.78,0-5.66-.05-5.39-.21-8.22-3.18-8.94-8.38-1.66-12-8.89-18.21-19.61-16.83-9.73,1.26-15.53,10.2-14,21.58,3,22.06,20.61,37.43,43.35,37.45q113.81.12,227.61,0h7.87l1.42,1.65c-6.07,9-11.82,18.19-18.29,26.87-8.24,11-19.65,15.75-33.45,15.69-40.57-.17-81.15,0-121.73-.09a54.47,54.47,0,0,1-9.55-.79c-10.59-2-18.22-8.35-24.9-16.46-7-8.51-11.07-7.61-13.9-7.66-6.3-.12-11.38,4.52-14.31,7.83A14.9,14.9,0,0,0,41,247.16a15.06,15.06,0,0,0,3.27,10.11c2,2.27,3.93,4.59,5.9,6.87,14.12,16.36,32.18,25.06,53.59,25.29,42.83.47,85.68.35,128.52,0,19.27-.14,36.26-7.11,49.77-21,18.95-19.48,31.37-42.78,38-69.09C323,187.84,315.15,178.26,303.21,177.87Z" /><path className="cls-1" d="M336.11,143.64a42.5,42.5,0,0,0-42.23-37.37c-24.72-.13-49.44,0-74.16,0H56c2.53-4.84,4.36-8.75,6.56-12.44C106,20.61,208.34,13,263.31,78.81c7.55,9,17.31,10.69,25.19,4.26s8.26-17,.49-26C248.42,10.43,197.23-8.79,136.86,3.74,74.15,16.76,34.1,56.3,16.57,118.09c-3.22,11.33,4,21,15.58,21.85,2.62.19,5.28.06,7.92.06H289.73c10,0,11.32,1.14,13,10.73s9,15.44,18.37,14.66C331.49,164.52,337.64,155.63,336.11,143.64Z" /></g></g></svg>
                <span className="logo-label">Menu Hamburguer</span>
            </a>
            <div className="header-menu-top">
                <div className="menu-buscador">
                    <input type="text" placeholder="Buscar..." />
                </div>
                <div className="user-icon">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.84 46.16"><g id="Capa_2" data-name="Capa 2"><g id="obj"><path className="cls-1" d="M27.23,24A12.5,12.5,0,0,0,22.42,0a12.5,12.5,0,0,0-4.8,24A22.71,22.71,0,0,0,0,46.16H2.31A20.29,20.29,0,0,1,22.42,25.74,20.3,20.3,0,0,1,42.54,46.16h2.3A22.7,22.7,0,0,0,27.23,24ZM12.41,12.48a10,10,0,1,1,20,0,10,10,0,1,1-20,0Z" /></g></g></svg>
                    </a>
                </div>
                <div className="cart-icon">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.16 40.48"><g id="Capa_2" data-name="Capa 2"><g id="obj"><path className="cls-1" d="M39,0,37,7.71H0L6.29,31.22H33.13L39,9.16h0l0-.08.36-1.37h0l1.42-5.4h5.33V0ZM31.36,28.91H8.06L3,10H36.42Z" /><path className="cls-1" d="M13.29,33.71a3.39,3.39,0,1,0,3.39,3.39A3.4,3.4,0,0,0,13.29,33.71Zm0,4.46a1.08,1.08,0,1,1,1.08-1.07A1.08,1.08,0,0,1,13.29,38.17Z" /><path className="cls-1" d="M26.14,33.71a3.39,3.39,0,1,0,3.39,3.39A3.4,3.4,0,0,0,26.14,33.71Zm0,4.46a1.08,1.08,0,1,1,1.08-1.07A1.08,1.08,0,0,1,26.14,38.17Z" /></g></g></svg>
                        <span className="cart-label">7</span>
                    </a>
                    
                </div>

            </div>
        </div>
    )
}