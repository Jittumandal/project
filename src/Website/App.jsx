import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import NavBar from "./NavBar";
import DigitalDesign from "./DigitalDesign";
import ReactTemplate from "./ReactTemplate";
import Footer from "./Footer";
import Gallery from "./Gallery";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/reacttemplate" component={ReactTemplate} />
        <Route exact path="/digitaldesign" component={DigitalDesign} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  );
};
export default App;
