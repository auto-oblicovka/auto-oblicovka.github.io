let siteBarFon = document.getElementById('fonSitBar');
    buttomMenuOff = document.getElementById('buttom-off');
    buttomMenuOn = document.getElementById('buttom-on');
    menuSiteBar = document.getElementById('menu');

function menu() {
  siteBarFon.className = "siteBarFonViev";
  buttomMenuOff.style.display = "none";
  buttomMenuOn.style.display = "flex";
  menuSiteBar.style.display = "flex";
}

function closeMenu() {
  siteBarFon.className = "siteBarFonNoViev";
  buttomMenuOff.style.display = "flex";
  buttomMenuOn.style.display = "none";
  menuSiteBar.style.display = "none";
}
