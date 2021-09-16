import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHospitalSymbol } from "react-icons/fa";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import  { navItems} from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";


function Navbar(){
    const [dropdown, setDropdown] = useState(false);
    return(
        <div>
        <nav className="navbar">


{/* Navbar and icon  */}
            <Link to="/" className="navbar-logo">
              HEALTH SYSTEM
            <FaHospitalSymbol className='navbar-icon' />
            </Link>

{/* NavItems Creation here  */}

            <ul className="nav-items">
                {navItems.map((item) => {

                    if (item.title === "Services"){
                        return(
                            <li key= {item} className={item.cName}
                            onMouseEnter = {() => setDropdown(true)}
                            onMouseLeave = {() => setDropdown(false)}
                            >
                                 <Link to={item.path}
                                 
                                  >
                                      {item.title}</Link>

                                {dropdown && <Dropdown />}
    
                            </li>

                        );
                    }

                    return(
                    <li key= {item} className={item.cName}>
                        <Link to={item.path}>{item.title}</Link>

                    </li>
                    );
                })}
            </ul>

{/* Adding Button Component */}
            <Button />

        </nav>
        </div>
    );
}


export default Navbar;