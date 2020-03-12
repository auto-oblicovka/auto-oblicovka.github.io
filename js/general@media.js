let fonSitBar = document.createElement('div');
let spisok = document.createElement('div');


let buttom = document.getElementById('buttom');


fonSitBar.className = "siteBarFon";



spisok.className = "spisok";



function menu() {
  buttom.append(fonSitBar);
  fonSitBar.append(spisok);

}
