import { NavLink } from "react-router-dom";

function Hero() {


  return (
  
  
  
  <div className="hero">
   <img id="imgabout4" src="./restauranfood.jpg" alt="restaurant" />
   <h1> Little Lemon</h1>
   <h4> Chicago</h4>
   <p> Little Lemon is a charming neighborhood bistro that serves simple 
   food and classic cocktails in a lively but casual environment. 
   The restaurant features a locally-sources menu with daily specials. </p>
   <NavLink to="reservation" id="herolink">  <button id="heroReserve">   Reserve Table </button> </NavLink> 
   







  </div>)




};

export default Hero;
