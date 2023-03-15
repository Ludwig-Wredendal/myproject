import React from "react";
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Extra | " + Config.SITE_TITLE;
const DESC = "Extra page";
/*const CANONICAL = Config.SITE_DOMAIN + "/"; */


class Extra extends React.Component {

    render() {
        return (
          <body>
            <Helmet>
                <title>{TITLE}</title>
                <link rel="canonical" href="{CANONICAL}"/>
                <meta name = "desciption" content = {DESC}/>
                <meta name = "theme-color" content = {Config.THEME_COLOR}/>
            </Helmet>

            <div className="extra-page">
            <h2>Beskrivning</h2>
            <p>
              "Om det är svårt att passa in någon eller några av de fyra sista
              punkterna i listan ovan så skapar ni en extrasida på er webbplats 
              som ni länkar till där ni lägger till dessa enbart för att visa att 
              ni behärskar tekniken. Det blir i så fall en sida utöver det 
              som egentligen ska finnas på er hemsida".
            </p>
            <hr />
            <div className="table-example">
              <h2>Tabell</h2>
              <table>
                <tbody><tr>
                    <th>Pizza</th>
                    <th>Antal</th>
                  </tr>
                  <tr>
                    <td>Vesivio</td>
                    <td>58</td>
                  </tr>
                  <tr><td>Kebabpizza</td>
                    <td>67</td>
                  </tr>
                  <tr>
                    <td>Capriccosa</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>Margherita</td>
                    <td>44</td>
                  </tr>
                  <tr>
                    <td>Kycklingpizza</td>
                    <td>39</td> 
                  </tr>
                  <tr>
                    <td>Calzone</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>Funghi</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>Bussola</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>Mexicana</td>
                    <td>31</td>
                  </tr>
                </tbody></table>
            </div>
            <hr />
            <div className="form">
              <h2>Formulär</h2>
              <p> Vi listar våra mest sålda pizzor.<br />
                Vilken pizza föredrar du?</p>
              <br />
              <form action="ExtraTwo">
                <input type="radio" id="html" name="fav_pizza" />
                <label htmlFor="kebabpizza">Kebabpizza</label><br />
                <input type="radio" id="css" name="fav_pizza" />
                <label htmlFor="hawaii">Hawaii</label><br />
                <input type="radio" id="javascript" name="fav_pizza" />
                <label htmlFor="vesuvio">Vesuvio</label><br />
                <input type="radio" id="javascript" name="fav_pizza" />
                <label htmlFor="margherita">Margherita</label><br />
                <input type="radio" id="javascript" name="fav_pizza" />
                <label htmlFor="cappricciosa">Capricciosa</label><br />
                <br />
                <p>Vi vill gärna ha ditt namn</p>
                <label htmlFor="fname">Namn:</label><br />
                <input type="text" id="fname" name="fname" defaultValue /><br />
                <label htmlFor="lname">Mail:</label><br />
                <input type="text" id="mail" name="mail" defaultValue /><br /><br />
                <input type="submit" defaultValue="Submit" />
              </form>
            </div>
            <hr />
            {/*FOOTER*/}
            
            <div className="footer-section">
              <div className="Länk-formulär-etc">
                <NavLink to="../" activeClassName="active">Tillbaka till Chattanoga</NavLink>
              </div> 
            </div>
            
          </div>

          </body>
        );
    }
}

export default Extra;