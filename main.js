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
function loadDialogDatenschutz() {
    DIALOG_DATENSCHUTZ.showModal();
    DIALOG_DATENSCHUTZ.classList.add("showPictureFlex");


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
