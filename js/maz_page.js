let maz = [];

    maz[0] = bamper5440 = {
                             url: 'maz_bamper_5440.html',
                            name: 'Новый бампер МАЗ 5440',
                          urlIMG: 'Tovar/MAZ/Bamper/5440/MAZ_bamper_5440.jpeg',
                            cena: '13 000',
                             teg: ['bamper5440', '5440', 'mazBamper',],
                           }
    maz[1] = prostorGuba = {
                             url: 'maz_bamper_prostor_guba.html',
                            name: 'Низ (губа) бампера МАЗ Простор',
                          urlIMG: 'Tovar/MAZ/Bamper/Niz_Prostor_(guba)/prev_niz_prostor.jpeg',
                            cena: '7 000',
                             teg: ['prostorGuba', 'prostor', 'mazBamper',],
                            }
    maz[2] = prostorUgliKalina = {
                             url: 'maz_bamper_prostor_ugli_kalina.html',
                            name: 'Углы Простор под фары Лада-Калина',
                          urlIMG: 'Tovar/MAZ/Bamper/New_Prostor_ugli_kalina/prev_oprava_kalina.jpeg',
                            cena: '4 500',
                             teg: ['prostorUgliKalina', 'prostor', 'mazBamper',],
                                  }
    maz[3] = prostorUgli = {
                             url: 'maz_bamper_prostor_ugli.html',
                            name: 'Новые угла от бампера МАЗ Простор',
                          urlIMG: 'Tovar/MAZ/Bamper/New_Prostor_ugli/prev_ugli_new_prostor.jpeg',
                            cena: '4 000',
                             teg: ['prostorUgli', 'prostor', 'mazBamper',],
                            }
    maz[4] = bamperProstor = {
                             url: 'maz_bamper_prostor.html',
                            name: 'Новый бампер МАЗ Простор',
                          urlIMG: 'Tovar/MAZ/Bamper/New_Prostor/Prev_bamper_prostor.jpeg',
                            cena: '13 000',
                             teg: ['bamperProstor', 'prostor', 'mazBamper', 'mazBamper',],
                               }
    maz[5] = fariVAZ2106 = {
                             url: 'maz_fari_oprava_VAZ-2106.html',
                            name: 'Вставки под фары ВАЗ-2106 в углы МАЗ Простор',
                          urlIMG: 'Tovar/MAZ/Fari/Vstavki_pod_fary_VAZ-2106_v_ugli_bampera_MAZ_Prostor/prew.jpeg',
                            cena: '6 000',
                             teg: ['fariVAZ2106', 'prostor', 'mazBamper',],
                            }
model = maz;

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

if(mazBamper = document.querySelector('.maz_bamper')) {
  related = mazBamper;
  teg = 'mazBamper';
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
