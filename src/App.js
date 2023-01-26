import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Reservation from "./components/Reservation";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
   
      <div className="App">
    <BrowserRouter> 
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Main />} />
          <Route path="contact" element={<Footer />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
