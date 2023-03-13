import React from 'react'
import classes from "./spenden.module.css"

const Spenden = () => {
  return (
    <div className={classes["spenden-container"]}>
    <div className={classes["spenden-iban"]}>
        <h2 className={classes["spenden-iban-title"]}>Spendenkonto</h2>
        <p>Spenden Sie einfach über Ihr Konto an uns:</p>

        <div className={classes["spenden-iban-konto"]}>
        <p>IBAN: DE 0000 0000 0000 0000 0000</p>
        <p>Institut: XXXXXX XXXX XXX</p>
        <p>Verwendungszweck: Spende "Lichtenberg"</p>
        </div>
        <p>Mit Ihrer Spende unterstützen Sie gezielt die Darstellung der Historie unseres Dorfes! Sie erhalten Informationen über alle Aktivitäten des Vereins und seiner Mitglieder.</p>
        <p>Wünschen Sie eine Spendenbescheinigung, fordern Sie diese bitte unter folgender E-Mail-Adresse an: <a href="mailto:dg-lichtenberg@gmx.de?&subject=Mail from our Website">dg-lichtenberg@gmx.de</a> </p>
        <p>Sie erhalten die Gewissheit, dass 100% Ihrer Spende für die Projekte des Heimatvereins Lichtenberg eingesetzt werden.</p>
        
        </div>    
    <div className={classes["spenden-paypal"]}>
    <h2 className={classes["spenden-paypal-title"]}>Paypal-Konto
    </h2>
    
    <p>Spenden Sie mit einem einfachen Klick auf unser Paypal Konto. Als Zahlungsoptionen stehen Ihnen dabei PayPal, sowie Kreditkarten zur Verfügung.
Die Spendentransaktion findet ausschließlich über PayPal statt. Weitere Informationen von PayPal über den Umgang mit Ihrern Daten finden Sie unter:</p>
<a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full?locale.x=de_DE">Datenschutzerklärung - Paypal</a>
    <p>Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln diese vertraulich und gemäß der gesetzlichen Datenschutzvorschriften.</p>
  
    </div>    
        
    </div>
  )
}

export default Spenden