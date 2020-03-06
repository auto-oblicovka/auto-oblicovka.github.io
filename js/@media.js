let spisok = document.getElementById('buttom');

function menu() {
  spisok.innerHTML = `<div class="buttom-menu-zg"  onclick="close_menu()">
    <p>МЕНЮ</p>
  </div>
  <ul class="menu_ul">
     <li><a class="site_bar" href="1.maz_page.html"><h2>МАЗ</h2></a></li>
     <li><a class="site_bar" href="2.0kamaz_page.html"><h2>КАМАЗ</h2></a></li>
     <li><a class="site_bar" href="3.gaz_page.html"><h2>ГАЗ</h2></a></li>
     <li><a class="site_bar" href="4.zil_page.html"><h2>ЗиЛ</h2></a></li>
     <li><a class="site_bar" href="5.mtz_page.html"><h2>МТЗ</h2></a></li>
     <li><a class="site_bar" href="6.ymaha_page.html"><h2>YMAHA</h2></a></li>
     <li><a class="site_bar" href="7.jcb_page.html"><h2>JCB</h2></a></li>
     <li><a class="site_bar" href="8.infiniti_page.html"><h2>INFINITI</h2></a></li>
  </ul>`;
}

function close_menu() {
  spisok.innerHTML = `<div class="buttom-menu"  onclick="menu()">
    <p>МЕНЮ</p>
  </div>`;
}
