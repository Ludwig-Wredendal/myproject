import React from 'react';

class Menu extends React.Component{
    render() {
        return (
        
            <div className="container">
                <section id="menu">
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="logo"><img src= {require("../images/logowhite.png")} alt="logowhite" /></div>
                <div className="menu-section-title">vanliga PIZZOR</div>

                {/* 
                <button new id="btn3" onclick display="none">Synnedsättning</button> <br />
                <div id="info">Text har gjorts större och mörkare för underlätta läsning.</div> <br />
                */}

                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Margarita</div>
                    <div className="menu-item-description">Ost och tomatsås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Vesuvio</div>
                    <div className="menu-item-description">Skinka</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Bolognes</div>
                    <div className="menu-item-description">köttfärssås, lök</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Capriccosa</div>
                    <div className="menu-item-description">skinka, champinjoner</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Hawaii</div>
                    <div className="menu-item-description">skinka, ananas</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Artista</div>
                    <div className="menu-item-description">skinka, räkor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Opera</div>
                    <div className="menu-item-description">skinka, tonfisk</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Pino</div>
                    <div className="menu-item-description">skinka, köttfärssås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Gorgonzola</div>
                    <div className="menu-item-description">skinka, gorgonzolaost</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Marinara</div>
                    <div className="menu-item-description">räkor, musslor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Gudfader</div>
                    <div className="menu-item-description">tonfisk, lök</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">La bella</div>
                    <div className="menu-item-description">tonfisk, räkor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Caciatore</div>
                    <div className="menu-item-description">salami, lök</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Rio</div>
                    <div className="menu-item-description">skinka, köttfärssås, bacon</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Siciliana</div>
                    <div className="menu-item-description">sardeller, färsk vitlök, oliver, kapris</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Bussola</div>
                    <div className="menu-item-description">skinka, champinjoner, räkor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Elpaso</div>
                    <div className="menu-item-description">skinka, tonfisk, lök, räkor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Vegetarisk</div>
                    <div className="menu-item-description">champinjoner, färsk paprika, lök,tomater, ananas, oliver</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Potensa</div>
                    <div className="menu-item-description">bacon, lök, ägg</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Laguna</div>
                    <div className="menu-item-description">skinka, köttfärssås, ananas</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Pacirico</div>
                    <div className="menu-item-description">skinka, ananas, räkor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Palermo</div>
                    <div className="menu-item-description">salami, paprika, oliver</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Banana</div>
                    <div className="menu-item-description">skinka, banan, curry</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Marinara</div>
                    <div className="menu-item-description">räkor, musslor</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Calzone</div>
                    <div className="menu-item-description">skinka</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Calzone special</div>
                    <div className="menu-item-description">skinka, räkor, champinjoner</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Calzone kebab</div>
                    <div className="menu-item-description">kebab, grönsaker, STARK</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    110:-
                    </span>
                    <div className="menu-item-title">Calzone Disco</div>
                    <div className="menu-item-description">halv calcone, halv kebab</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">exklusiv pizza</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Quattro stagione</div>
                    <div className="menu-item-description">skinka, champinjoner, räkor, musslor, oliver</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Pepperoni</div>
                    <div className="menu-item-description">skinka, salami, köttfärssås, pepperoni</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Turkisk kebab</div>
                    <div className="menu-item-description">kebabkött, lök, sallad, pommes, pepperoni, tomater, tzatziki </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Kebabpizza</div>
                    <div className="menu-item-description">kebabkött, lök, champinjoner, pepperoni, kebabdressing</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Kyckling</div>
                    <div className="menu-item-description">kyckling, ananas, banan, curry, orientdressing</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Tropicana</div>
                    <div className="menu-item-description">skinka, banan, ananas, curry</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Gamla Indiana</div>
                    <div className="menu-item-description">skinka, stekt köttfärs, curry, vitlök, stark </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Grekisk Pizza</div>
                    <div className="menu-item-description">Rödlök, tomater, champinjoner,Svarta Oliver, Salladsost</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">Hot pizzor</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">Taco</div>
                    <div className="menu-item-description">skinka, köttfärssås, lök, jalapeno, tacosås, tacokrydda, vitlök </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">Azteka</div>
                    <div className="menu-item-description">oxfilé, salami, färsk paprika, färska tomater, jalapeno, vitlök, tacosås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">Mexicana</div>
                    <div className="menu-item-description">köttfärssås, paprika, lök, vitlök, tacosås (stark) </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">California</div>
                    <div className="menu-item-description">lövbiff, champinjoner, räkor, vitlök, tacosås, bearnaisesås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">Hot kebab</div>
                    <div className="menu-item-description">kebabkött, lök, pepperoni, kebabdressing, stark sås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">Riviera</div>
                    <div className="menu-item-description">salami, bacon, köttfärssås, jalapeno</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">lyxpizza</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Dallas</div>
                    <div className="menu-item-description">fläskfilé, purjolök, kantareller, bearnaisesås </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Norrbotten special</div>
                    <div className="menu-item-description">renstek, bacon, lök, färska champinjoner, färsk paprika, bearnaisesås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Hasse SP</div>
                    <div className="menu-item-description">Grillbiff, stark bearnaisesås </div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Napli</div>
                    <div className="menu-item-description">oxfilé, purjolök, bearnaisesås,STARK</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Black &amp; White</div>
                    <div className="menu-item-description">oxfilé, fläskfilé, färska tomater, lök, tzatziki,</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Venesia</div>
                    <div className="menu-item-description">skinka, räkor, oxfilé, bacon, salami,bearnaisesås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Husets special</div>
                    <div className="menu-item-description">oxfilé, lök, champinjoner, färska tomater, bearnaisesås</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    135:-
                    </span>
                    <div className="menu-item-title">Patte Special</div>
                    <div className="menu-item-description">skinka, salami, stekt köttfärs, vitlök, stark</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">PASTA</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">OXFILÉ</div>
                    <div className="menu-item-description">gorgonzolasås, lök, champinjoner, paprika</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">FLÄSKFILÉ</div>
                    <div className="menu-item-description">grönpepparsås, lök, champinjoner, paprika</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">KYCKLING</div>
                    <div className="menu-item-description">currysås, lök, champinjoner, paprika</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">SKINKA</div>
                    <div className="menu-item-description">creme fraiche-sås, lök, champinjoner, paprika</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">CARBONARA</div>
                    <div className="menu-item-description">gräddsås, lök, bacon, ägg, ost</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">BOLOGNES</div>
                    <div className="menu-item-description">köttfärssås, köttfärssås, ost</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">VEG</div>
                    <div className="menu-item-description">creme fraiche-sås, lök, champinjoner, paprika, ananas, oliver</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">MARINARA</div>
                    <div className="menu-item-description">gräddsås, lök, champinjoner, paprika, räkor, musslo</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">HUSETS LASAGNE</div>
                    <div className="menu-item-description">Hemlis</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">KEBAB</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    125:-
                    </span>
                    <div className="menu-item-title">KEBABMÅL</div>
                    <div className="menu-item-description">pommes, läsk</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">KEBABRULLE</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">KEBABTALLRIK</div>
                    <div className="menu-item-description">pommes eller ris</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">KEBAB I PITABRÖD</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">KYCKLINGRULLE</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">RÄKRULLE</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">sallader</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">Räksallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, paprika, ägg, citron, ost, ananas.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Skinkaostsallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, paprika, majs, ost, ananas</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Kycklingsallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, paprika, majs, ost, ananas</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Blandsallad</div>
                    <div className="menu-item-description">kyckling, räkor, tonfisk, skinka, isbergssallad, tomat, gurka, paprika, ost, ananas</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Grekisk sallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, rödlök, fetaost, svarta oliver</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Veg sallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, paprika, majs, rödlök, ost, ananas, champinjoner</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    120:-
                    </span>
                    <div className="menu-item-title">Västkustsallad</div>
                    <div className="menu-item-description">isbergssallad, tomat, gurka, paprika, musslor, räkor, tonfisk, ost, citron</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">asiatiska köket <br /> ris/nudlar</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">wokad kyckling</div>
                    <div className="menu-item-description">lök, paprika, broccoli, vattenkastanj, bambuskott</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">wokad biff</div>
                    <div className="menu-item-description">lök, paprika, broccoli, vattenkastanj, bambuskott.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">wokad fläskfilé</div>
                    <div className="menu-item-description">lök, paprika, broccoli, vattenkastanj, bambuskott</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">wokade grönsaker (vegetarisk)</div>
                    <div className="menu-item-description">lök, paprika, broccoli, vattenkastanj, bambuskott</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">Husmanskost</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">BRÄCKT SKINKA</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">PYTT I PANNA</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">KÖTTBULLAR MED MOS</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    130:-
                    </span>
                    <div className="menu-item-title">PANERAD RÖDSPÄTTA</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu-section-header">
                <div className="menu-section-title">kötträtter</div>
                </div>
                <div className="menu-items">
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    320:-
                    </span>
                    <div className="menu-item-title">PEPPARSTEK</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    320:-
                    </span>
                    <div className="menu-item-title">BLACK &amp; WHITE</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    320:-
                    </span>
                    <div className="menu-item-title">ENTRECÔTE</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-item">
                    <span className="menu-item-price-top">
                    <span className="currency-sign" />
                    320:-
                    </span>
                    <div className="menu-item-title">FILÉ OSCAR</div>
                    <div className="menu-item-description">Lorem, ipsum dolor.</div>
                </div>
                <div className="menu-info">
                    <p>Brunsås och bearnaisesås finns till alla kötträtter.<br />
                    Välj bland pommes, kokt potatis, stekt potatis eller potatisgratäng.</p>
                </div>
                </div>
            </div>
                </section>
            </div>
        
        );
    }
}

export default Menu;