let gallary = [];
    i = 0;
    j = 1;
    closeGallary = document.getElementById('close_gallary')
do {
  gallary[i] = document.getElementById('gallary_img' + j);
  i = i+1;
  j = j+1;
} while (gallary[i-1] != undefined);

function close_gallary() {
  closeGallary.style.display = "none";
}

function see1() {
  let see_table = document.getElementById('see_pictor');
  see_img = gallary[0];
  see_img.style.width = "100%";
  closeGallary.style.display = "flex";
  see_table.append(see_img);

}

function see2() {
  let see_table = document.getElementById('see_pictor');
  see_img = gallary[1];
  see_img.style.width = "100%";
  closeGallary.style.display = "flex";
  see_table.append(see_img);

}
