let menu_all = document.querySelector('.site_bar_box');


menu_all.innerHTML = `
<div class="menu_box">

  <div id="focus">
    <a href="kamaz_page.html" style="text-decoration: none; color: #ffffff">
    <div class="punkt1">
      КАМАЗ
    </div>
    </a>

    <div class="border_box">
      <div class="border">
      </div>
    </div>
  </div>

  <a href="maz_page.html" style="text-decoration: none; color: #ffffff">
  <div class="punkt1">
    МАЗ
  </div>
  </a>

  <div class="border_box">
    <div class="border">
    </div>
  </div>



</div> <!-- menu_box -->
`;

let menuOff = document.getElementById('menu-off');
    menuOn = document.getElementById('menu-on');

    boxMENU = document.querySelector('.tovar');

function onClick() {
  menuOff.className = "iconMenu neVidno";
  menuOn.className = "iconMenu vidno";
  menu_all.style = "display: flex";
}

function offClick() {
  menuOff.className = "iconMenu vidno";
  menuOn.className = "iconMenu neVidno";
  menu_all.style = "display: none";
}
