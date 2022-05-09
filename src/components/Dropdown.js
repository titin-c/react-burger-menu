import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "sub-children" : "";

  // para cerrarrar el menu hijo buscamos todos los li volver
const subMenuToggle = document.querySelectorAll('.volver-toggle'); 
for(const i in subMenuToggle) {
  if(subMenuToggle.hasOwnProperty(i)) {
    subMenuToggle[i].onclick = function() {
      this.parentElement.classList.toggle("active"); // toggleamos al ul padre
    };
  }
}

  return (
    <ul className={`menu children ${dropdownClass} ${dropdown ? "active" : ""}`}>
      <li className='volver-toggle'>

        <span className="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.19 47.19"><polygon className="cls-1" points="14.6 23.77 26.82 35.26 28.19 33.8 17.11 23.38 27.68 13.38 26.31 11.93 14.2 23.38 14.6 23.77 14.6 23.77"/></svg></span> 
        <a href="#" >Volver</a>
      </li>
          {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
