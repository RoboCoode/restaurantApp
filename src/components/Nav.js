import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="nav">
        <img src="./Logo.svg" alt="logo" />
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="about"> About</NavLink>
          </li>
          <li>
            <NavLink to="menu"> Menu</NavLink>
          </li>
          <li>
            <NavLink to="reservation"> Reservation</NavLink>
          </li>
          <li>
            <NavLink to="orderonline"> Order online</NavLink>
          </li>
          <li>
            <NavLink to="contact"> Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
