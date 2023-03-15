import React from "react";
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Extratwo | " + Config.SITE_TITLE;
const DESC = "Thank you for answering";
/*const CANONICAL = Config.SITE_DOMAIN + "/"; */

class ExtraTwo extends React.Component {

    render() {
        return(
          <body>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href="{CANONICAL}"/>
                <meta name = "desciption" content = {DESC}/>
                <meta name = "theme-color" content = {Config.THEME_COLOR}/>
            </Helmet>

            <div>
            <h1>TACK FÖR DITT SVAR</h1>
            <div className="Länk-formulär-etc">
              <NavLink to="../Extra" activeClassName="active">Tillbaka till Extrasida</NavLink>
              <br />
              <NavLink to="../../" activeClassName="active">Tillbaka till Chattanoga</NavLink>
            </div>  
          </div>
          </body>
        );
    }
}

export default ExtraTwo;