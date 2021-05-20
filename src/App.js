import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Action from "./components/Action";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Backtotop from "./components/Backtotop"



import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/default.css";
import "./components/assets/css/magnific-popup.css";
import "./components/assets/css/style.css";
import "./components/assets/css/style.css.map";
import "./components/assets/css/LineIcons.css";



function App() {
  return (
    <div>
      <Header />
      <Services />
      <Pricing />
      <Action />   
      <Contact /> 
      <Footer />
      <Backtotop />
    </div>
    
  );
}

export default App;
