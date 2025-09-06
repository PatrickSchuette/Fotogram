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

const dialogRef = document.getElementById("showPicture");
const overlaygRef = document.getElementById("overlay");

function createResponsiveMenuHTML() {
    return `
        <div class="logo hide-mobile"><a href="index.html"> <img src="./img/Fotogram_Logo.svg" alt ="Logo"> </a> </div>
        <div class="logo hide-desktop"><a href="index.html"> <img src="./img/favicon.svg" alt ="Logo"> </a> </div>
        <button class="menu-btn hide-desktop" onclick="toggleRespMenu()" aria-label="Menü öffnen">☰</button>
        <nav id="resp_menu" class="main-nav resp_menu_box resp_menu_closed" aria-hidden="true">
            <ul>
                <li><a href="index.html">Startseite</a></li>
                <li><a href="contact.html">Kontakt</a></li>
                <li><a href="impressum.html">Impressum</a></li>
            </ul>
        </nav>
    `;
}

function createFooterHTML() {
    return `
        <div class="logo hide-mobile"><a href="index.html"> <img src="./img/Fotogram_Logo.svg" alt ="Logo"> </a> </div>
        <div class="logo hide-desktop"><a href="index.html"> <img src="./img/favicon.svg" alt ="Logo"> </a> </div>
        <div id="FooterLink" class="">
            <a href="http://facebook.com"><img src="./img/social-icons/Facebook_logo.svg" alt="Facebook"></a>
            <a href="http://instagram.com"><img src="./img/social-icons/Instagram_logo.svg" alt="Instagramm"></a>
        </div>
    `;
}

//Header und Footer für die Hauptseite laden
function loadMenus() {
    // Menü direkt nach dem Header einfügen
    document.getElementById("header-container").insertAdjacentHTML("beforeend", createResponsiveMenuHTML());
    document.getElementById("footer-container").insertAdjacentHTML("beforeend", createFooterHTML());
}

// Vorschaubilder auf der index.html erzeugen
function getPreview() {
    let container = document.getElementById("FotogramPreview");
    let html = "";

for (let i = 0; i < arrPicture.length; i++) {
    html += `
        <button onclick="loadDialog('${i}')" class="imgPreview" aria-label="${arrPicture[i][1]}">
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


// Funktion zum Überprüfen bei der Wahl des nächsten Bildes ob es das letzte ist
function nextPicture() {
    if (selectedImg < arrPicture.length -1) {
        selectedImg++;
    } else {
        selectedImg = 0;
    }
    loadPicture();
}

function previousPicture() {
    if (selectedImg == 0) {
        selectedImg = arrPicture.length -1;
    } else {
        selectedImg--;
    }
    loadPicture();
}



function loadDialog(i) {
    dialogRef.showModal();
    dialogRef.classList.add("showPictureFlex");
    overlay.classList.remove("d_none");
    selectedImg = i;
    loadPicture();

}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove("showPictureFlex");
    overlay.classList.add("d_none");
}


// Initialisierung
loadMenus();  //header, Menü und Footer laden
getPreview();  //die vorschau zeigen
