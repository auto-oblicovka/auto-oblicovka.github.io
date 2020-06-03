let gallary = [];
    i = 0;
    closeGallary = document.getElementById('close_gallary');
    see_table = document.getElementById('see_pictor');

gallary[0] = `<img class="foto" src="Tovar/KAMAZ/SunKozirki/SunKozirkiPolukrug/PrevSunKozirkiPolukrug.jpeg">`;
gallary[1] = `<img class="foto" src="Tovar/KAMAZ/SunKozirki/SunKozirkiPolukrug/img1.jpeg">`;



function close_gallary() {
  closeGallary.style.display = "none";
  see_table.innerHTML = undefined;
}

function see(see_img) {
  see_table.innerHTML = see_img;
  closeGallary.style.display = "flex";
}

function see1() {
  i = 0;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;


}

function see2() {
  i = 1;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}

function see3() {
  i = 2;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}

function see4() {
  i = 3;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}

function see5() {
  i = 4;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}

function see6() {
  i = 5;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}

function see7() {
  i = 6;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}

function see8() {
  i = 7;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}

function see9() {
  i = 8;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}
function see10() {
  i = 9;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}

function see11() {
  i = 10;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}

function see12() {
  i = 11;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;
}

function see13() {
  i = 12;
  see_img = gallary[i];
  see(see_img);
  closeGallary.style.display = "flex";
  return i;

}


function next() {
  i = i + 1;
  see_img = gallary[i];

  if (i<=1) {
    see(see_img);
    closeGallary.style.display = "flex";
  } else {
    i = 0;
    see_img = gallary[i];
    see(see_img);
    closeGallary.style.display = "flex";
  }
}

function back() {
  i = i - 1;
  see_img = gallary[i];

  if (i>=0) {
    see(see_img);
    closeGallary.style.display = "flex";
  } else {
    i = 1;
    see_img = gallary[i];
    see(see_img);
    closeGallary.style.display = "flex";
  }
}
