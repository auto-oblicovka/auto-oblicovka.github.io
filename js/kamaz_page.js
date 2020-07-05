let kamaz = [];

   kamaz[0] = bamper5308 = {
                            url: 'kamaz_bamper_5308,4308.html',
                           name: 'Бампер КАМАЗ 5308, 4308',
                         urlIMG: 'Tovar/KAMAZ/Bamper/Bamper5308,4308/KAMAZ_bamper5308,4308.jpeg',
                           cena: '10 000',
                            teg: ['bamper5308', '5308', 'kamaz', 'kamazBamper',],
                           }
   kamaz[1] = zadKrilo5308 = {
                            url: 'kamaz_krilo_5308,4308.html',
                           name: 'Заднее крыло КАМАЗ 5308,4308',
                         urlIMG: 'Tovar/KAMAZ/Krilo/ZadKrilo5308,4308/PrevZadKrilo5308,4308.jpeg',
                           cena: '5 000',
                            teg: ['zadKrilo5308', '5308', 'kamaz', 'kamazKrilo',],
                           }
   kamaz[2] = podnogki5308 = {
                            url: 'kamaz_podnogki_5308,4308.html',
                           name: 'Подножк с крылом под бампер КАМАЗ 5308, 4308',
                         urlIMG: 'Tovar/KAMAZ/Podnogki/PodnogkiSKrilom5308,4308/PrevPodnogkiSKrilom5308,4308.jpeg',
                           cena: '4 500',
                            teg: ['podnogki5308', '5308', 'kamaz', 'kamazPodnogki',],
                             }
   kamaz[3] = bamper6520 = {
                            url: 'kamaz_bamper_6520restayle.html',
                           name: 'Бампер КАМАЗ 6520 рестайл',
                         urlIMG: 'Tovar/KAMAZ/Bamper/Bamper6520restayle/KAMAZ_bamper6520restayle.jpeg',
                           cena: '10 000',
                            teg: ['bamper6520', '6520', 'kamaz',  'kamaz6520_65115', 'kamazBamper',],

                             }
   kamaz[4] = krilo6520 = {
                            url: 'kamaz_krilo_6520,65115.html',
                           name: 'Крыло Камаз 6520,65115',
                         urlIMG: 'Tovar/KAMAZ/Krilo/Krilo6520,65115/PrevKriloKamaz6520,65115.jpeg',
                           cena: '4 000',
                            teg: ['krilo6520', '6520', '65115', 'kamaz', 'kamaz6520_65115', 'kamazKrilo',],
                            }
   kamaz[5] = podnogki6520 = {
                            url: 'kamaz_podnogki_6520(dubl),6520restyle,65115.html',
                           name: 'Подножки КАМАЗ 6520, 65115',
                         urlIMG: 'Tovar/KAMAZ/Podnogki/Podnogki6520(dubl)6520restyl,65115/PrevPodnogki6520(dubl)6520restyl,6115.jpeg',
                           cena: '4 000',
                            teg: ['podnogki6520', '6520', '65115', 'kamaz', 'kamaz6520_65115', 'kamazPodnogki',],
                             }
   kamaz[6] = bamper65115 = {
                            url: 'kamaz_bamper_65115restayle.html',
                           name: 'Бампер КАМАЗ 65115 рестайл',
                         urlIMG: 'Tovar/KAMAZ/Bamper/Bamper65115restayle/KAMAZ_bamper65115restayle.jpeg',
                           cena: '10 000',
                            teg: ['bamper65115', '65115', 'kamaz', 'kamaz6520_65115', 'kamazBamper',],
                            }
   kamaz[7] = kapot = {
                            url: 'kamaz_kapot_kapot.html',
                           name: 'Капоты на КАМАЗ',
                         urlIMG: 'Tovar/KAMAZ/Kapot/KAMAZkapotPREV.jpeg',
                           cena: '12 000',
                            teg: ['5308', '65115', '6520', 'kapot', 'kamaz', 'kamaz6520_65115',],
                      }
   kamaz[8] = sunkozirkiKrug = {
                            url: 'kamaz_sunkoziriki_polukrug.html',
                           name: 'Солнцезащитный козырек на КАМАЗ полукруглый',
                         urlIMG: 'Tovar/KAMAZ/SunKozirki/SunKozirkiPolukrug/PrevSunKozirkiPolukrug.jpeg',
                           cena: '6 000',
                            teg: ['sunkozirkiKrug', '5308', '65115', '6520', 'kamaz', 'kamaz6520_65115', 'kamazKozirok',],
                               }
   kamaz[9] = sunkozirkiPl = {
                            url: 'kamaz_sunkozirki_plosky.html',
                           name: 'Солнцезащитный козырек на КАМАЗ плоский',
                         urlIMG: 'Tovar/KAMAZ/SunKozirki/SunKozirkiPlosky/PrevSunKozirki.jpeg',
                           cena: '5 000',
                            teg: ['sunkozirkiPl', '5308', '65115', '6520', 'kamaz', 'kamaz6520_65115', 'kamazKozirok',],
                             }
model = kamaz;

function vstavka() {
  for (let page of model) {

      for (let hteg of page.teg) {
          if  ( hteg === teg ) {
             let kartochka = document.createElement('div');
                 kartochka.innerHTML = `<a class="kartochka_a" href="`+ page.url +`">
                                          <div class="kartochka">
                                            <h2>
                                               `+ page.name +`
                                            </h2>
                                            <div class="kartochka-description">
                                              <div class="inline-img">
                                                <img class="tolabel" src="`+ page.urlIMG+`">
                                              </div>
                                              <div> <!-- inline-blok -->
                                                <p><span class="otstupText">Материал:</span>стекловолокно<br>
                                                <span class="otstupText">Крепления:</span>штатное</p>
                                                <p><span>Цена: `+ page.cena +` р.</span></p>
                                              </div>
                                            </div>
                                          </div>
                                        </a> `;
                    kartochka.style = 'display: flex;';

                    related.append(kartochka);

                                    }
                                   }
                                  }
                                 }

if(kamazBamper = document.querySelector('.kamaz_bamper')) {
  related = kamazBamper;
  teg = 'kamazBamper';
  vstavka();
};

if(kamazKapot = document.querySelector('.kamaz_kapot')) {
  related = kamazKapot;
  teg = 'kapot';
  vstavka();
};

if(kamazKrilo = document.querySelector('.kamaz_krilo')) {
  related = kamazKrilo;
  teg = 'kamazKrilo';
  vstavka();
};

if(kamazPodnogki = document.querySelector('.kamaz_podnogki')) {
  related = kamazPodnogki;
  teg = 'kamazPodnogki';
  vstavka();
};

if(kamazKozirok = document.querySelector('.kamaz_kozirki')) {
  related = kamazKozirok;
  teg = 'kamazKozirok';
  vstavka();
};
