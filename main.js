let arrPicture = [

    "blackcomb-52957_1280.jpg",
    "heliskiing-heli-skiing-1974015_1280.jpg",
    "mountain-6908988_1280.jpg",
    "nature-1283694_1280.jpg",
    "ski-2098120_1280.jpg",
    "skiing-4835024_1280.jpg",
    "skiing-5878729_1280.jpg",
    "skiing-6060431_1280.jpg",
    "snow-6881356_1280.jpg"

];

let selectedImg;

const dialogRef = document.getElementById("showPicture");

function createResponsiveMenuHTML() {
    return `
        <div class="logo"><img src="./img/Fotogram_Logo.svg" alt="Logo"></div>
        <button class="menu-btn hide-desktop" onclick="toggleRespMenu()" aria-label="Menü öffnen">☰</button>
    `;
}

function createFooterHTML() {
    return `
        <div class="logo hide-mobile"><a href="index.html"> <img src="./img/Fotogram_Logo.svg" alt ="Logo"> </a> </div>
        <div class="logo hide-desktop"><a href="index.html"> <img src="./img/Fotogram_Logo.svg" alt ="Logo"> </a> </div>
        <div id="FooterLink" class="">
            <a href="http://facebook.com"><img src="./img/social-icons/icons8-facebook-48.png" alt="Facebook"></a>
            <a href="http://instagram.com"><img src="./img/social-icons/icons8-instagram-48.png" alt="Instagramm"></a>
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
        html += `<img src="./ski/${arrPicture[i]}" class="imgPreview" onclick="loadDialog('${i}')">`;
    }

    container.innerHTML = html;
}

//Funktion um das Bild in die Dialogbox zu laden
function loadPicture() {
    let container = document.getElementById("FotogramImg");
    container.innerHTML = `<img src="./ski/${arrPicture[selectedImg]}">`;
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
    selectedImg = i;
    loadPicture();

}

function closeDialog() {
    dialogRef.close();
}


// Initialisierung
loadMenus();
getPreview();
