import React from 'react';

class Contact extends React.Component {
    render() {
        return (
        <body>
            <div className="container">
                <section id="contact">
                    <div className="row">
                        <div className="main">
                            <div className="main-text">
                                <h2>Välkommen till Restaurang Chattanoga!</h2>
                                <p>Vi är en pizzeria där vi tillagar allt möjligt såsom pizza, 
                                pasta, hamburgare, husmanskost, goda lunch bufféer och mycket mer. 
                                Restaurang Chattanoga är en välkänd restaurang inom Luleå och vi har funnits
                                sedan början av 90-talet.</p>
                            </div>
                            <div className="contact-video">
                                <video controls loop height={240} autoPlay>
                                <source src={require("../images/videoblocks-baking-pizza-in-the-oven-close-up_byq3oih_l__b25a612761401a52816726101d095a34__P1080.mp4")} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="side">
                            <h4>Telefonnummer</h4>
                            0920-699 98
                            <h4>Öppettider</h4>                   
                            Mån-Fre 10-20 <br />
                            Lör-Sön 11-20 <br />
                            (Öppet-tiderna kan ändras vid behov)
                            <h4>Adress</h4>
                            PÅ BERGNÄSET VID KONSUM
                            Producentvägen 2, 972 51 Luleå
                        </div>
                    </div>
                </section>
            </div>
        </body>
        );
    }
}

export default Contact;