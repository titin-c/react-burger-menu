import { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();



  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={items.submenu ? "page_item page_item_has_children" : "page_item"}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          > 
            {items.icon ? <img src={items.icon} className="icon-item" height='15' width='15' alt={items.title} /> : <span className="icon-item">●</span>}
            <span className="item-title">{items.title}</span>
          </button>
          {!dropdown ? <span className='sub-nav-toggle'><span className="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.19 47.19"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M23.6,0A23.6,23.6,0,1,0,47.19,23.6,23.62,23.62,0,0,0,23.6,0Zm0,45.19A21.6,21.6,0,1,1,45.19,23.6,21.62,21.62,0,0,1,23.6,45.19Z"/><polygon className="cls-1" points="32.59 23.42 20.37 11.93 19 13.39 30.08 23.81 19.51 33.81 20.89 35.26 33 23.81 32.59 23.42 32.59 23.42"/></g></g></svg></span></span> : <span className='sub-nav-toggle'><span className="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.19 47.19"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M23.6,0A23.6,23.6,0,1,0,47.19,23.6,23.62,23.62,0,0,0,23.6,0Zm0,45.19A21.6,21.6,0,1,1,45.19,23.6,21.62,21.62,0,0,1,23.6,45.19Z"/><polygon className="cls-1" points="32.59 23.42 20.37 11.93 19 13.39 30.08 23.81 19.51 33.81 20.89 35.26 33 23.81 32.59 23.42 32.59 23.42"/></g></g></svg></span></span>
}
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href="/#">
          {items.icon ? <img src={items.icon} className="icon-item" height='15' width='15' alt={items.title} /> : <span className="icon-item">●</span>}
          <span className="item-title">{items.title}</span>
          {items.alerts && <span className="item-label">{items.alerts}</span>}
          </a>
      )}
    </li>
  );
};

export default MenuItems;
