let arrPicture = [

    ["blackcomb-52957_1280.jpg", "Blackcomb Mountain im Winter"],
    ["heliskiing-heli-skiing-1974015_1280.jpg", "Heliskiing Abenteuer"],
    ["mountain-6908988_1280.jpg", "Majestätischer Berg bei Sonnenuntergang"],
    ["nature-1283694_1280.jpg", "Unberührte Natur im Schnee"],
    ["ski-2098120_1280.jpg", "Skifahrer auf der Piste"],
    ["skiing-4835024_1280.jpg", "Dynamische Abfahrt im Tiefschnee"],
    ["skiing-5878729_1280.jpg", "Skifahrer in Aktion"],
    ["skiing-6060431_1280.jpg", "Sprung über Schneehügel"],
    ["snow-6881356_1280.jpg", "Verschneite Landschaft mit Bäumen"]
];

let selectedImg;

const DIALOG_PICTURE = document.getElementById("dialogPicture");
const OVERLAY_REF = document.getElementById("overlay");
const DIALOG_DATENSCHUTZ = document.getElementById("dialogDatenschutz");
const DIALOG_IMPRESSUM = document.getElementById("dialogImpressum");


// ################## Header und Footer für die Hauptseite laden

function createResponsiveMenuHTML() {
    return `
        <div class="logo hide-mobile"><img src="./img/Fotogram_Logo.svg" alt ="Fotogram_Logo"></div>
        <div class="logo hide-desktop"><img src="./img/favicon.svg" alt ="Fotogram_Logo"></div>
        <button class="menu-btn hide-desktop" onclick="toggleRespMenu()" aria-label="Menü öffnen">☰</button>
        <nav id="resp_menu" class="main-nav resp_menu_box resp_menu_closed" aria-hidden="true">
            <ul>
                <li><a onclick="loadDialogDatenschutz()">Datenschutz</a></li>
                <li><a onclick="loadDialogImpressum()">Impressum</a></li>
            </ul>
        </nav>
    `;
}

function createFooterHTML() {
    return `
        <div class="logo hide-mobile"><img src="./img/Fotogram_Logo.svg" alt ="Fotogram_Logo"> </div>
        <div class="logo hide-desktop"><img src="./img/favicon.svg" alt ="Fotogram_Logo"> </div>
        <div id="FooterLink" class="">
            <a href="http://facebook.com"><img src="./img/social-icons/Facebook_logo.svg" alt="Facebook"></a>
            <a href="http://instagram.com"><img src="./img/social-icons/Instagram_logo.svg" alt="Instagramm"></a>
        </div>
    `;
}


function loadMenus() {
    // Menü direkt nach dem Header einfügen
    document.getElementById("header-container").insertAdjacentHTML("beforeend", createResponsiveMenuHTML());
    document.getElementById("footer-container").insertAdjacentHTML("beforeend", createFooterHTML());
}

// ##################  Vorschaubilder auf der index.html erzeugen
function getPreview() {
    let container = document.getElementById("FotogramPreview");
    let html = "";

    for (let i = 0; i < arrPicture.length; i++) {
        html += `
        <button onclick="loadDialogImg('${i}')" class="imgPreview" aria-label="${arrPicture[i][1]}">
            <img src="./ski/${arrPicture[i][0]}" alt="">
        </button>
    `;
    }

    container.innerHTML = html;
}

// Menü im Handmodys
function toggleRespMenu() {
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
}

//Funktion um das Bild in die Dialogbox zu laden
function loadPicture() {
    let container = document.getElementById("FotogramImg");
    container.innerHTML = `<img src="./ski/${arrPicture[selectedImg][0]}" alt="${arrPicture[selectedImg][1]}">`;
    document.getElementById("imgID").innerHTML = `${selectedImg + 1} / ${arrPicture.length}`;
}


function handleKeyDown(event) {
    switch (event.key) {
        case "Escape":
            closeDialog();
            break;
        case "ArrowLeft":
            previousPicture();
            break;
        case "ArrowRight":
            nextPicture();
            break;
    }
}

// Funktion zum Überprüfen bei der Wahl des nächsten Bildes ob es das letzte ist
function nextPicture() {
    if (selectedImg < arrPicture.length - 1) {
        selectedImg++;
    } else {
        selectedImg = 0;
    }
    loadPicture();


}

function previousPicture() {
    if (selectedImg == 0) {
        selectedImg = arrPicture.length - 1;
    } else {
        selectedImg--;
    }
    loadPicture();
}



function loadDialogImg(i) {
    DIALOG_PICTURE.showModal();
    DIALOG_PICTURE.classList.add("showPictureFlex");
    OVERLAY_REF.classList.remove("d_none");
    document.addEventListener("keydown", handleKeyDown); // Tastatursteuerung aktivieren

    selectedImg = parseInt(i);
    loadPicture();

}

function closeDialog() {
    const DIALOGS = document.querySelectorAll("dialog");
    DIALOGS.forEach(dialog => {
        if (dialog.open) {
            dialog.close();
            dialog.classList.remove("showPictureFlex");
        }
    });

    OVERLAY_REF.classList.add("d_none");
}



//#################  Datenschutz

function createDatenschutzHTML() {
    return `
       <section id="ImpHaftungsausschuss">
  <h3>Haftungsausschluss: </h3>
  <h4>Haftung für Inhalte</h4>
  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
  Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für
  eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
  Diensteanbieter
  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
  forschen,
  die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
  Informationen nach
  den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
  Kenntnis einer
  konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
  umgehend
  entfernen.
  <h4>Haftung für Links</h4>
  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
  stets
  der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
  der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
  erkennbar.
  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
  Rechtsverletzung
  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
</section>

<section id="ImpUrheberrecht">
  <h3>Urheberrecht</h3>
  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
  bedürfen
  der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
  privaten,
  nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
  werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
</section>

<section id="ImpDatenschutz">
  <h3>Datenschutz</h3>
  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
  Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden,
  erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
  Zustimmung nicht an Dritte weitergegeben. <br>
  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
  aufweisen kann.
  Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br>
  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung
  von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
  Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
  von Werbeinformationen, etwa durch Spam-Mails, vor.
</section>

<section id="ImpGoogle">
  <h3>Google Analytics</h3>
  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google'').
  Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine
  Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
  Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA
  übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten,
  um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der
  Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen
  gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag
  von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen.
  Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer
  Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
  sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären
  Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und
  zu dem zuvor benannten Zweck einverstanden.

  <h3>Google AdSense</h3>
  Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google Adsense
  verwendet sog.
  ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website
  durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web Beacons'' (kleine unsichtbare Grafiken) zur Sammlung
  von Informationen. Durch die Verwendung des Web Beacons können einfache Aktionen wie der Besucherverkehr auf der
  Webseite aufgezeichnet und gesammelt werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über
  Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA
  übertragen
  und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick
  auf die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber
  zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu
  erbringen.
  Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder
  soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen
  Daten
  der Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons
  können Sie verhindern, indem Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS
  Internet-Explorer unter
  ''Extras > Internetoptionen > Datenschutz > Einstellung''; im Firefox unter ''Extras > Einstellungen > Datenschutz >
  Cookies'');
</section>

<section id="ImpSonstiges">
  wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
  voll
  umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie
  erhobenen
  Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p><br>
  Impressum von <a href="https://websitewissen.com" rel="dofollow">WebsiteWissen.com</a>, dem Ratgeber für
  <a href="https://websitewissen.com/wordpress-website-erstellen" rel="dofollow">WordPress-Websites</a>,
  <a href="https://websitewissen.com/wordpress-hosting-vergleich" rel="dofollow">WordPress-Hosting</a> und
  <a href="https://websitewissen.com/website-kosten" rel="dofollow">Website-Kosten</a> nach einem Muster von
  <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach Rechtsanwälte</a> 
</section>

    `;
}


function loadDialogDatenschutz() {
    DIALOG_DATENSCHUTZ.showModal();
    DIALOG_DATENSCHUTZ.classList.add("showPictureFlex");

    let container = document.getElementById("Datenschutz");
    container.innerHTML = createDatenschutzHTML();

    overlay.classList.remove("d_none");

    document.addEventListener("keydown", handleKeyDown); // Tastatursteuerung aktivieren
}


//#################  Impressum

function createImpressumHTML() {
    return `
    <div>
        <p>Patrick Sch&uuml;tte<br />
        S&uuml;dstra&szlig;e 7<br />
        52134 Herzogenrath</p>

        <br>
        <h3>Kontakt</h3>
        <p>Telefon: 01631234567<br />
        E-Mail: patrick.sch@web.de</p>

        <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
    </div>
        `;
}

function loadDialogImpressum() {
    DIALOG_IMPRESSUM.showModal();
    DIALOG_IMPRESSUM.classList.add("showPictureFlex");

    let container = document.getElementById("Impressum");
    container.innerHTML = createImpressumHTML();

    overlay.classList.remove("d_none");

    document.addEventListener("keydown", handleKeyDown); // Tastatursteuerung aktivieren

}


// Initialisierung
loadMenus();  //header, Menü und Footer laden
getPreview();  //die vorschau zeigen
