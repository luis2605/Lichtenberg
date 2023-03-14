import React from 'react';
import styles from './impressum.module.css';

function Impressum() {
  return (
    <div className={styles.impressum}>
      <h1>Impressum</h1>
      <div className={styles.contactInfo}>
        <p>Dorfgemeinschaft Lichtenberg e.V.</p>
        <p>zu den Gärten 39 a</p>
        <p>51597 Morsbach</p>
        <p>Telefon: 01701796321</p>
        <p>E-Mail:dg-lichtenberg@gmx.de</p>
        <p>Internet: www.dorfgemeinschaft-lichtenberg.de</p>
      </div>
      <div className={styles.vorstand}>
        <p>Vertretungsberechtigter Vorstand:</p>
        <p>Timo Neuber (1. Vorsitzende)</p>
        {/* <p>Vorname Nachname (2. Vorsitzender)</p> */}
        {/* <p>Vorname Nachname (Kassenwart)</p> */}
      </div>
      <div className={styles.registerInfo}>
        <p>Registergericht: Amtsgericht Vereinsstadt</p>
        <p>Registernummer: VR 12345</p>
      </div>
      <div className={styles.verantwortlich}>
        <p>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:</p>
        <p>Luis Rondon (Siteadmin)</p>
      </div>

      <div className={styles.weitere}>
      <h2>Weitere Angaben zum Impressum:</h2>
        <p>Alle Rechte vorbehalten. Texte, Bilder, Grafiken, Sound, Animationen und Videos unterliegen dem Schutz des Urheberrechts und anderer Schutzgesetze. Der Inhalt dieser Website darf nicht zu kommerziellen Zwecken verbreitet oder Dritten zugänglich gemacht werden. Irrtümer und Änderungen vorbehalten.
Sollten wir auf diesen Seiten Verknüpfungen zu anderen Seiten im Internet angelegt haben, so haben wir auf sämtliche Links keinerlei Einfluss. Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten der verknüpften Seiten. Diese Erklärung gilt für alle auf dieser Seite ausgebrachten Links und für alle Inhalte der Seiten, zu denen ggf. Banner führen.</p>
      </div>
      <div className={styles.weitere}>
      <h3>Verweise und Links</h3>
        <p>Dorfgemeinschaft Lichtenberg e.V. distanziert sich ausdrücklich von dem Inhalt der innerhalb ihres Angebotes per Hyperlink oder in sonstiger Weise zugänglich gemachten fremden Webseiten. Wir haben keinerlei Einfluss auf den Inhalt dieser Seiten und können deshalb für die inhaltliche Korrektheit, Rechtmäßigkeit, Vollständigkeit und Verfügbarkeit fremder Inhalte keine Gewährleistung übernehmen. Es wird ausdrücklich erklärt, dass zum Zeitpunkt der Linksetzung die entsprechend verlinkten Seiten frei von illegalen Inhalten waren. Für illegale, fehlerhafte oder unvollständige Inhalte sowie für Schäden, die aus der Nutzung fremder Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde.</p>
      </div>
      <div className={styles.weitere}>
      <h3>Urheberrechte :</h3>
        <p>Diese Webseite unterliegt dem gesetzlich geschützten Urheberrecht. Dies gilt für ihre Struktur und sämtliche darin enthaltenen Funktionalitäten, Informationen, Daten, Texte, Bild- und Tonmaterialien sowie alle zur Funktionalität dieser Webseite eingesetzten Komponenten. Der Nutzer darf die Inhalte im Rahmen der angebotenen Funktionalitäten der Webseiten für seinen persönlichen Gebrauch nutzen. Im Übrigen erwirbt er keine Rechte an den Inhalten und Programmen. Dorfgemeinschaft Lichtenberg e.V. ist bestrebt in diesem Internet-Auftritt die Urheberrechte der verwendeten Grafiken, Tondokumente und Texte zu beachten.
</p>
<p>Einige Bilder auf dieser Website sind urheberrechtlich geschützt und gehören <strong>Christoph Buchen</strong>. Diese Bilder dürfen nicht ohne ausdrückliche Genehmigung der jeweiligen Eigentümer verwendet werden.</p>
      </div>

    
      <div className={styles.weitere}>
      <h3>Allgemeine Hinweise zu dieser Homepage:</h3>
        <p>Die Angaben über Angebote und sonstige Inhalte dieser Website haben nur in Deutschland Gültigkeit. Sie stellen in keiner Weise ein Angebot im Rechtssinne da. Druckfehler, Irrtümer und Änderungen bleiben vorbehalten
</p>
      </div>
      <div className={styles.weitere}>
      <h3>Anwendbares Recht :</h3>
        <p>Das Verhältnis von Dorfgemeinschaft Lichtenberg e.V. zu ihren Nutzern unterliegt deutschem Recht.</p>
      </div>
      <div className={styles.weitere}>
      <h3>Online-Streitbeilegung (OS) :</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:</p>
        <a href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage">http://ec.europa.eu/odr<br></br></a>
      </div>
      <div className={styles.weitere}>
      <h3>Salvatorische Klausel :</h3>
        <p>Sollte eine Bestimmung dieser Bedingungen unwirksam sein oder sollten diese eine Regelungslücke enthalten, so bleibt die Rechtswirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Bestimmung, die der gewollten am nächsten kommt. Gleiches gilt im Falle einer Regelungslücke.</p>
      </div>
    </div>
  );
}

export default Impressum;
