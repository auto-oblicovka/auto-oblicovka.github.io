let buttomoff = document.getElementById('buttom-off');
let buttomon  = document.getElementById('buttom-on');
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
}
