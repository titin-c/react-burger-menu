import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

export const BurguerMenu = () => {
  return (
    <div className="menu-burguer">
      <nav id="site-navigation" className="main-navigation">
        <div id="primary-menu" >
          <ul className="menu">
          {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
            </ul>
          </div>
        </nav>
      </div>
  );
}