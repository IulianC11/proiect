import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  

  const showSidebar = () => setSidebar(!sidebar);

  // Adăugăm un event listener pentru clicuri pe întregul document atunci când bara laterală este deschisă
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Verificăm dacă bara laterală este deschisă și dacă clicul a avut loc în afara ei
      if (sidebar && !event.target.closest(".navbar")) {
        // Dacă da, închidem bara laterală
        setSidebar(false);
      }
    };

    // Adăugăm event listener-ul atunci când bara laterală este deschisă
    if (sidebar) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Eliminăm event listener-ul atunci când componenta este demontată sau când bara laterală se închide
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <>
      <IconContext.Provider value={{ color: "undifined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img
            src="https://img.freepik.com/premium-vector/traveler-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-969.jpg?size=626&ext=jpg"
            alt="logo"
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={() => setSidebar(false)} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => setSidebar(false)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;