let gallary = [];
    i = 0;
    j = 1;
do {
  gallary[i] = document.getElementById('gallary_img' + j);
  i = i+1;
  j = j+1;
} while (gallary[i-1] != undefined);

function see() {
  let fonGallary = document.createElement('div');

  fonGallary.className = "fon_gallary";
  document.body.append(fonGallary);
  document.fonGallary.append(gallary[0]);
}
