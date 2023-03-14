import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import {NavLink, Link} from "react-router-dom";

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Restaurang Chattanoga";
const CANONICAL = Config.SITE_DOMAIN + "/";

class Home extends  React.Component{
    render() {
        return  (

            

    <div className="container">
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href="{CANONICAL}"/>
                <meta name = "desciption" content = {DESC}/>
                <meta name = "theme-color" content = {Config.THEME_COLOR}/>
            </Helmet>

        <nav className="navbar">
          <ul>
            <li><a href ="#home">Hem</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <img src={require("../images/logoblack.png")} alt="logoblack" />
            <li><a href="#menu">Meny</a></li>
            <li><a href="#facebook">Facebook</a></li>
          </ul>
        </nav>
        <div className="hamburger-menu-display">
          <label htmlFor="trigger">
            <input type="checkbox" className="trigger" id="trigger" />
            <div className="hamburger">
              <span />
              <span />
              <span />
            </div>
            <span className="hamburger-menu" />
            <nav className="navburger">
              <ul>
                <li><a href="#home">Hem</a></li>
                <li><a href="#contact">Kontakt</a></li>
                <li><a href="#menu">Meny</a></li>
                <li><a href="#facebook">Facebook</a></li>
              </ul>
            </nav>
          </label>
        </div>

        <section id="home">
          <h2>Restaurang</h2>
          <h1>Chattanoga</h1>
          <h2>Pizzeria &amp; Pasteria</h2>
        </section>

        <div className="footer-section">
          <div className="Länk-formulär-etc">
            <NavLink to="Extra" activeClassName="active">Formulär, tabell</NavLink>
          </div>  
          <br /> Extrasida för att uppfylla kraven under uppgift 5.
        </div>
        
    </div>

        );
    }
}

export default Home;

