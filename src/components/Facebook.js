import React from 'react';

class Facebook extends React.Component {
    render() {
        return (
        <body>
            <div className="container">
                <section id="facebook">
                    <div className="facebook-section">
                        <div className="tooltip-container">
                        <p id="tooltip-text">Tryck för att komma till Facebook</p>
                        <h2 id="tooltip-header"><a href="https://www.facebook.com/pages/Restaurang-Chattanoga-pizzeria-pasteria/175911049097877">Facebook</a></h2>
                        </div>

                    {/* The code below was implemented in lab 3 and will not be used in this lab. It is only kept here for future use.
                        So please ignore.
                
                    <div className="slideshow-container">
                    <div className="mySlides">
                        <div className="numbertext">1 / 6</div>
                        <img src= {require("../images/chattafb1.jpg")} alt="facebook-bild"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">2 / 6</div>
                        <img src={require("../images/chattafb2.jpg")} alt="facebook-bild"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">3 / 6</div>
                        <img src= { require("../images/chattafb3.jpg")} alt="facebook-bild"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">4 / 6</div>
                        <img src={ require("../images/chattafb4.jpg")} alt="facebook-bild"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">5 / 6</div>
                        <img src={ require("../images/chattafb5.jpg")} alt="facebook-bild"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">6 / 6</div>
                        <img src= {require ("../images/chattafb6.jpg")} alt="facebook-bild"/>
                    </div>
                    <a className="prev" onclick="plusSlides(-1)">❮</a>
                    <a className="next" onclick="plusSlides(1)">❯</a>
                    </div>
                    <br />
                    <div className="slideNr">
                    <span className="dot" onclick="currentSlide(1)" />
                    <span className="dot" onclick="currentSlide(2)" />
                    <span className="dot" onclick="currentSlide(3)" />
                    <span className="dot" onclick="currentSlide(4)" />
                    <span className="dot" onclick="currentSlide(5)" />
                    <span className="dot" onclick="currentSlide(6)" />
                    </div>
                    <button new id="btn1" onclick="{style.display = 'none'}">Me second</button>
                    <button new id="btn2" onclick="{style.display = 'none'}">Me first</button>
                    */}
                    </div>
                </section>
            </div>
        </body>
        );
    }
}
export default Facebook;