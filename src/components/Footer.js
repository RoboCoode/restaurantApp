function Footer() {
  return (
    <div className="footer">
      <img id="logo2" src="./logo2.png" alt="logo" />

      <div className="foot-section">
        <ul>
          <h3>Contact </h3>
          <li>
            <label> Adress:</label> Beverly Hills 9210{" "}
          </li>

          <li>
           <label>Phone: </label> +010010144475{" "}
          </li>
          <li>
            <label>Email: </label> little.lemon@com
          </li>
        </ul>

        <ul>
          <h3> Pages </h3>
          <li>Menu</li>
          <li>Order Online</li>

          <li>Reservation</li>
          <li>About</li>
          <li>Contact </li>
        </ul>

        <ul>
          <h3> Social Links </h3>
          <icon></icon>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
