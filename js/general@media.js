// Появление сайт-бара
let buttomoff = document.getElementById('buttom-off');
    buttomon  = document.getElementById('buttom-on');
    sitbar = document.getElementById('fonSitBar');


function menu() {
  buttomoff.style.display = "none";
  buttomon.style.display = "flex";
  sitbar.className = "siteBarFonViev";

}

function closeMenu() {
  buttomoff.style.display = "flex";
  buttomon.style.display = "none";
  sitbar.className = "siteBarFonNoViev";
  closeMenuKAMAZ();
  closeMenuMAZ();
}








// Выпадение дроп-меню КАМАЗ
let dropKAMAZ = document.getElementById('drop_kamaz');
    icon_drop_Kamaz_close = document.getElementById('icon_drop_kamaz_close');
    icon_drop_kamaz_open = document.getElementById('icon_drop_kamaz_open');

function dropMenuKAMAZ() {
  icon_drop_Kamaz_close.style.display = "none";
  icon_drop_kamaz_open.style.display = "block";
  dropKAMAZ.style.display = "flex";
  closeMenuMAZ();
}

function closeMenuKAMAZ() {
  icon_drop_Kamaz_close.style.display = "block";
  icon_drop_kamaz_open.style.display = "none";
  dropKAMAZ.style.display = "none";
}

// Выпадение дроп-меню МАЗ
let dropMAZ = document.getElementById('drop_maz');
    icon_drop_maz_close = document.getElementById('icon_drop_maz_close');
    icon_drop_maz_open = document.getElementById('icon_drop_maz_open');

function dropMenuMAZ() {
  icon_drop_maz_close.style.display = "none";
  icon_drop_maz_open.style.display = "block";
  dropMAZ.style.display = "flex";
  closeMenuKAMAZ();
}

function closeMenuMAZ() {
  icon_drop_maz_close.style.display = "block";
  icon_drop_maz_open.style.display = "none";
  dropMAZ.style.display = "none";
}
