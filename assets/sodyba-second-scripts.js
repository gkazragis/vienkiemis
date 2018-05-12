

//function myMap() {
//var mapOptions = {
//    center: new google.maps.LatLng(51.5, -0.12),
//    zoom: 10,
//    mapTypeId: google.maps.MapTypeId.HYBRID
//}
//var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//}

//});
/*
document.getElementById("showdata").onclick = function () {
       this.innerHTML = "Laisva";
    }
//
jQuery(document).ready(function($){
*/
//  $('[data-toggle="tooltip"]').tooltip();

//jQuery(document).ready(function($){
  //document.querySelector("#burger-button").addEventListener('click',function(){
    //  var elem = document.querySelector('#mobile-navigation');
      //elem.classList.toggle("hidden");

            // set Listener here, also using suggested test for null
            /*
            $("#infoToggler").click(function() {
    $(this).find('img').toggle();
});
*/


    // all custom jQuery will go here
    //$('#category-tabs li a').click(function(){
    //  $(this).next('ul').slideToggle('500');
    //  $(this).find('i').toggleClass('fa-plus-circle fa-minus-circle')

    //});

    var selection = [{ind:1,
                      name:{
                        Lt:"Organizavimas",
                        Eng:"Logistics"},
                      click:0,
                      xy:"55.637049,25.096984",
                      head:{
                        Lt:"Poilsio organizavimas",
                        Eng:"Leisure organizing"},
                      addr:"Magylų 2, Andrioniškio sen., Anykščių rajonas",
                      cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                      text:{
                        Lt:"Teikiame šias paslaugas: poilsio plano sudarymas, transporto su vairuotoju nuoma,  nakvynės vietos radimas ir rezervavimas, maitinimo organizavimas, pageidaujamų pramogų užsakymas.",
                        Eng:"We provide the following services: arranging a rest plan, renting a car with a driver, finding a place for a lodging and booking, catering, ordering the desired entertainment."}},
                     {ind:2,
                      name:{
                        Lt:"Transportas",
                        Eng:"Transport"},
                      click:0,
                      xy:"55.637049,25.096984",
                      head:{
                        Lt:"Transporto paslaugos",
                        Eng:"Transportation service"},
                      addr:"Magylų 2, Andrioniškio sen., Anykščių rajonas",
                      cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                      text:{
                        Lt:"Atvežti į sodybą ir nuvežti į pasirinktas vietas galime vienatūriu VW 'Touran', į kurį telpa 4 keleiviai.",
                        Eng:"VW 'Touran' can be brought to the farmstead and taken to the selected places, which can accommodate 4 passengers."}},
                     {ind:3,
                      name:{
                        Lt:"Apgyvendinimas",
                        Eng:"Accomodation"},
                      click:0,
                      xy:"55.637049,25.096984",
                      head:{
                        Lt:"Apgyvendinimas",
                        Eng:"Place to stay"},
                      addr:"Magylų 2, Andrioniškio sen., Anykščių rajonas",
                      cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                      text:{
                        Lt:"Šiuo metu paslauga neteikiama, bet galime surasti apgyvendinimą.",
                        Eng:"Service is not available at this time, but we can find accommodation."}},
                     {ind:4,
                       name:{
                         Lt:"Masažas ir pirtis",
                         Eng:"Massage & SPA"},
                       click:0,
                       xy:"55.641527,25.095065",
                       head:{
                          Lt:"Masažas ir pirtis",
                          Eng:"Massage & SPA"},
                       addr:"Magylų 7, Andrioniškio sen., Anykščių rajonas",
                       cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                       text:{
                         Lt:"Viena geriausių pirčių EVER! Rojaus kampelis žemėje, o šeimininkai - Angelai, mokantys vaikščioti žeme. Pirtis, porą žingsnių ir pakrautas vanduo... ",
                         Eng:"One of the best saunas EVER! Paradise Corner on earth, and hosts - Angels, taught to walk on the ground. Sauna, a couple of steps and loaded with water..."}},
                     {ind:5,
                       name:{
                         Lt:"Meditacija ir joga",
                         Eng:"Meditation & yoga"},
                       click:0,
                       xy:"55.637049,25.096984",
                       head:{
                         Lt:"Meditacija ir joga",
                         Eng:"Meditation & yoga"},
                       addr:"Magylų 2, Andrioniškio sen., Anykščių rajonas",
                       cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                       text:{
                         Lt:"Informacija ruošiama.",
                         Eng:"Information will be available soon."}},
                     {ind:6,
                       name:{
                         Lt:"Keramika",
                         Eng:"Ceramics"},
                       click:0,
                       xy:"55.653622,25.180695",
                       head:{
                         Lt:"Keramikos pamokos",
                         Eng:"Ceramic lessons"},
                       addr:"Inkūnų 3, Anykščių sen., Anykščių rajonas",
                       cont:"Email: giedriusnnt@gmail.com, tel. +370 626 63396",
                       text:{
                         Lt:"Informacija ruošiama.",
                         Eng:"Information will be available soon."}},
                     {ind:7,
                       name:{
                         Lt:"Baidarės",
                         Eng:"Canoes and rafts"},
                       click:0,
                       xy:"55.649033,25.258820",
                       head:{
                         Lt:"Plaukimas baidarėmis ar plaustais",
                         Eng:"Canoeing and rafting"},
                       addr:" Švenosios upė, Anykščių rajonas",
                       cont:"http://www.baidaremis.eu/baidare/baidariu-marsrutai/andrioniskis ",
                       text:{
                         Lt:"Vienos ar dviejų dienų plaukimas baidarėmis arba plaustais Šventosios upe: plauksite pro Užpalius, Galinius, Šventupį, Buėnus, Mickūnus, Mičionis, Mikierius, Sedeikius, Andrioniškį. Galite pasirinki bet kurią upės atkarpą. Baidarės nuomojamos kiekviename kaime ir sodyboje.",
                         Eng:"One-day or two-day canoeing or rafting on the Sventoji River: walk through Užpalius, Galinis, Šventupis, Buenas, Mickūnas, Mičionis, Mikierius, Sedeikius, Andrioniškis. You can choose any section of the river. Canoes are rented in every village and country house."}},
                     {ind:8,
                       name:{
                         Lt:"Jodinėjimas",
                         Eng:"Horseriding"},
                       click:0,
                       xy:"55.572945,25.087629",
                       head:{
                         Lt:"Jodinėjimas žirgais",
                         Eng:"Horsriding"},
                       addr:"Niūronių kaimas, Anykščių rajonas",
                       cont:"http://www.vilartas.lt",
                       text:{
                         Lt:"Jodinėjimas žirgais Niūronių hipodrome, manieže. Individualios jojimo pamokos vaikams ir suaugusiems. Jojimas gamtoje po Niūronių apylinkes, Šventosios pakrantėmis, žirgų maudynės. Važinėjimas karietomis, rogėmis.",
                         Eng:"Horseback Riding in the Niūroniai Rhodeway, manure. Individual riding lessons for children and adults. Riding in the nature after the surroundings of Niūroniai, the Sventoji coast, horse bathing. Riding with carriages, sleighs."}},
                     {ind:9,
                       name:{
                         Lt:"Siaurukas",
                         Eng:"Narrow-gauge train"},
                       click:0,
                       xy:"55.532737,25.108311",
                       head:{
                         Lt:"Pasivažinėjimas siauruku",
                         Eng:"Trips on narrow-gauge train"},
                       addr:"Vilties g. 2, Anykščiai",
                       cont:"http://www.siaurukas.eu/keliones/reguliarus-reisai ",
                       text:{
                         Lt:"Anykščius garsina ir siaurukas – tebeveikianti siaurojo geležinkelio linija ir jos garbei įkurtas muziejus. Siauruku galima nuvyki tiek į Troškūnus, tiek ir prie Rubikių ežero.",
                         Eng:"Anykščiai is also famous for the narrow-gauge railway - the narrow line is still in operation and the museum is founded on its honor. You can take a narrow-gauge train to both Troškūnai and to the Rubikiai lake."}},
                     {ind:10,
                       name:{
                         Lt:"Lajų takas",
                         Eng:"Laoya path"},
                       click:0,
                       xy:"55.485330,25.060278",
                       head:{
                         Lt:"Pasivaikščiojimas lajų taku",
                         Eng:"Walk on the laoya path"},
                       addr:" Dvaronių k. 5, Anykščiai 29168",
                       cont:"http://www.kontikis.lt/lietuva/medziu-laju-takas",
                       text:{
                         Lt:"2015 metų rugpjūčio mėnesį Lietuvoje, Anykščiuose, buvo atidarytas medžių lajų takas sužavėjęs turistus ne tik iš Lietuvos bet ir iš kaimyninių šalių. Tai pirmasis toks medžių lajų tako kompleksas rytų Europoje. Kompleksą sudaro pats takas, 34 metrų aukščio apžvalgos bokštas ir informacijos centras. Lajų tako ilgis – 300 metrų. Jis  pastatytas Anykščių šilelyje, šalia garsiojo Puntuko akmens. Taku gali pasinaudoti ir neįgalieji – tam įrengtas liftas, tad pakilus galima pavažinėti po taką ir pasigrožėti Anykščiu šileliu. Lajų tako lankymas yra nemokamas. ",
                         Eng:"In August of 2015, in Lithuania, Anykščiai, the Tree Tree Trail was opened to fascinate tourists not only from Lithuania but also from neighboring countries. It is the first such tree-lake trail complex in eastern Europe. The complex consists of a trail itself, a 34-meter-high observation tower and information center. Lajų takas length - 300 meters. It was built in Anykščiai Silk, next to the famous Puntukas stone. The lift can also be used by disabled people, so you can take a walk along the path and admire the Anykščių šiliai. Visiting the Lay Trail is free."}},
                     {ind:11,
                       name:{
                         Lt:"Kartingas",
                         Eng:""},
                       click:0,
                       xy:"55.522152,25.088208",
                       head:{
                         Lt:"Kartingas",
                         Eng:""},
                       addr:"A. Vienuolio g. 38, Anykščiai",
                       cont:"http://www.motorsportas.lt",
                       text:{
                         Lt:"Anykščių technikos sporto klubas ,,Motorsportas“   siūlo pasivažinėti vieninteliais Lietuvoje  galingiausiais  pramoginiais kartingais. Siūlome organizuoti važiavimus kartingais profesionalioje trasoje, rengti tarpusavio varžybas. Kartodrome yra įrengtos trys  trasos variantai: pramoginės trasos ilgis - 850 m. , sportinės  trasos ilgis - 1050 m. ir vaikų trasos ilgis 300 m. Tai puiki galimybė pabėgti nuo rutinos, patirti ekstremalių  įspūdžių Jums ir Jūsų draugams tiek žiemą, tiek vasarą.",
                         Eng:""}},
                     {ind:12,
                       name:{
                         Lt:"Mikierių tiltas",
                         Eng:""},
                       click:0,
                       xy:"55.658377,25.178879",
                       head:{
                         Lt:"Mikierių ('beždžionių') tiltas",
                         Eng:""},
                       addr:"Magylų 2, Andrioniškio sen., Anykščių rajonas",
                       cont:"https://lt.wikipedia.org/wiki/Mikieri%C5%B3_tiltas",
                       text:{
                         Lt:"Mikierių tiltas (kitaip vadinamas Beždžionių tiltu) - 80 m ilgio pėsčiųjų tiltas per Šventosios upę Anykščių rajone.Tiltas jungia Mikierius ir Inkūnus. Viename krante - prie Šimonių girios įsikūrusi miškų ūkio gyvenvietė, girininkija, mokykla, medicinos punktas, kitame krante - Inkūnų bažnyčia, kapinaitės.",
                         Eng:""}},
                     {ind:13,
                       name:{
                         Lt:"Angelų muziejus",
                         Eng:""},
                       click:0,
                       xy:"55.524183,25.102025",
                       head:{
                         Lt:"Angelų muziejus",
                         Eng:""},
                       addr:"Vilniaus g. 11, LT-29145 Anykščiai",
                       cont:"http://amenucentras.lt/angelu-muziejus/",
                       text:{
                         Lt:"Vienintelį Lietuvoje Angelų muziejų įkurė Amerikos lietuvė. Čia sukaupta angelų kolekcija – nuo liaudies menininkų kūrinių iki modernių meno darbų.",
                         Eng:""}},
                     {ind:14,
                       name:{
                         Lt:"Kalitos kalnas",
                         Eng:""},
                       click:0,
                       xy:"55.525758,25.125346",
                       head:{
                         Lt:"Kalitos kalnas",
                         Eng:""},
                       addr:"Kalno g. 25, LT-29117, Anykščiai",
                       cont:"http://kalitoskalnas.lt/",
                       text:{
                         Lt:"Unikali Lietuvoje 500 m ilgio vasaros rogučių trasa įrengta ant Kalitos kalno. Žiemą ant šio kalno veikia žiemos slidinėjimo centras. Anot legendos, ant Kalitos kalno kadaise buvo įsikūręs bajoro Nykščio dvaras.",
                         Eng:""}},
                     {ind:15,
                       name:{
                         Lt:"Puntuko akmuo",
                         Eng:""},
                       click:0,
                       xy:"55.484007,25.058808",
                       head:{
                         Lt:"Puntuko akmuo",
                         Eng:""},
                       addr:"Dvaronys, Anykščių r.",
                       cont:"http://www.infoanyksciai.lt/lankytinos-vietos/puntuko-akmuo/",
                       text:{
                         Lt:"Antras pagal dydį Lietuvoje (po Barstyčių akmens) Puntuko akmuo stūkso netoli Anykščių. Legenda pasakoja, kad kadaise velnias, norėdamas sugriauti bažnyčią, nešėsi akmenį. Staiga pragydo gaidžiai ir nelabasis, metęs akmenį, paspruko. Mokslininkai pateikia kiek kitokią akmens kilmės versiją – anot jų, Puntuką į Anykščius iš Skandinavijos prieš keliasdešimt tūkstančių metų atgabeno slinkdami ledynai. Akmeniui buvo duotas karžygio Puntuko vardas. Šis gamtos ir mitologijos paminklas tapo lakūnų S.Dariaus ir S.Girėno įamžinimo vieta. Į pietvakarius nuo Anykščių yra akmuo, vadinamas Puntuko broliu.",
                         Eng:""}},
                     {ind:16,
                       name:{
                         Lt:"Arklio muziejus",
                         Eng:""},
                       click:0,
                       xy:"55.573348,25.086802",
                       head:{
                         Lt:"Arklio muziejus",
                         Eng:""},
                       addr:"Niūronių k., Anykščių r.",
                       cont:"http://arkliomuziejus.lt/",
                       text:{
                         Lt:"Už 4-5 km nuo Anykščių, Niūronių kaime įkurtas muziejus, skirtas atskleisti arklio reikšmę lietuvių ūkio ir kultūros istorijoje. Muziejuje eksponuojami arkliniai žemės dirbimo padargai, kalvio įrankiai, transporto priemonės – iš Lietuvos miestų ir kaimų surinkti vežimai, bričkelės, lineikos, važeliai. Muziejaus etnografinėse sodybose rengiami edukaciniai renginiai, supažindinantys su senoviniais amatais, tradicijomis ir šventėmis.",
                         Eng:""}},
                     {ind:17,
                       name:{
                         Lt:"Pintinių muziejus",
                         Eng:""},
                       click:0,
                       xy:"55.660314,25.114525",
                       head:{
                         Lt:"Pintinių muziejus",
                         Eng:""},
                       addr:"Sedeikių k., Anykščių rajonas",
                       cont:"http://www.infoanyksciai.lt/lankytinos-vietos/pintiniu-sodelis",
                       text:{
                         Lt:"20 amžiaus pradžios sodyboje, Pelyšos geologinio draustinio teritorijoje įsikūręs „Pintinių muziejus“ Sodybos šeimininkai Ligita ir Kazys Morkūnai ilgamečiai pedagogai, sertifikuoti tradicinių amatų meistrai ( pynimas iš vytelių). Sodyboje aplankysite pintinių muziejų, susipažinsite su 19 – 20 amžiaus namų apyvokos daiktais, tų laikų buitimi. Draustinio teritorijoje apžiūrėsite gamtos paminklus, išgirsite legendas. Jūsų laukia pažintis su lietuviškos bitininkystės pradmenimis, žolelių rinkimo ypatybėmis. Ragausite tikrą miško medų su žolelių arbata. Edukacinėje veikloje išmoksite iš vytelių nusipinti krepšelį ar kitą gaminį. Susipažinsite su pynimo iš vytelių amatu.",
                         Eng:""}},
                     {ind:18,
                       name:{
                         Lt:"Vandenlentės",
                         Eng:""},
                       click:0,
                       xy:"55.551359,25.028787",
                       head:{
                         Lt:"Plaukiojimas vandenlentėmis",
                         Eng:""},
                       addr:"Kelias 121, tarp Anykščių ir Troškūnų, Anykščių rajonas",
                       cont:"Email: traukosslenis@gmail.com, tel. +37062415266",
                       text:{
                         Lt:"„WakePond“ parkas atvedė vandenlenčių sportą/pramogas į Anykščius. Parkas veikia nuo 2014 metų Pagojės tvenkinyje ir turi vienos sistemos trasą (ilgis 238 metrai) su keliomis figūromis. „WakePond“ taip pat siūlo tinklinį, batutą, valtis.",
                         Eng:""}},
                     {ind:19,
                       name:{
                         Lt:"Laipynių parkas",
                         Eng:""},
                       click:0,
                       xy:"55.510705,25.084549",
                       head:{
                         Lt:"Laipynių parkas",
                         Eng:""},
                       addr:"Vilniaus g. 80 B, Anykščiai",
                       cont:"http://www.nuotykiuslenis.lt",
                       text:{
                         Lt:"„Dainuvos Nuotykių Slėnis“, įsikūręs Anykščių šilelio prieglobstyje, ant Šventosios upės kranto, kviečia į aktyvaus laisvalaikio ir pramogų parką. Keliaudami nuo medžio ant medžio, įveikdami lengvas ir sudėtingas trasas patirsite neišdildomų įspūdžių ir aštrių pojūčių. Laisvės ir polėkio malonumą pajusite išbandę „Skrydį per Šventąją“ kurio bendras ilgis net virš 300 metrų!",
                         Eng:""}},
                     {ind:20,
                       name:{
                         Lt:"Pušų takas",
                         Eng:""},
                       click:0,
                       xy:"55.597689,25.05069",
                       head:{
                         Lt:"Sodyba „Pušų takas“",
                         Eng:""},
                       addr:"Paandrioniškio km., Andrioniškio sen., Anykščių rajonas",
                       cont:"http://www.pusutakas.lt",
                       text:{
                         Lt:"Sodybos geografinė padėtis - išskirtinė: Šventosios upės kraštovaizdis, nuostabus pušyno prieglobstis, arti išsidėstę lankytini objektai ir vietovės. Vienoje sodybos pusėje atsiveria puikus vaizdas į visada žalią mišką, o kitoje – pasitinka Šventosios upė. Atokioje vietoje nesijaučia miesto šurmulio, tvyro ramybė ir puiki atmosfera. Apsilankymas sodyboje „Pušų takas“ šventei suteiks išskirtinumo, o svečiams paliks neišdildomą įspūdį.",
                         Eng:""}}
                     ];

                     // var map12 = "https://goo.gl/maps/FWewxY6s1D22";
    var formONOFF = 0;
    var boxes = ["far fa-square","far fa-check-square"];

/*
    $('#switch-lang').click(function() {
      alert("Click");
      $('[lang="en"]').toggle();
      $('[lang="lt"]').toggle();
    });
*/
function clickLang() {
  // alert("ClickLang");
   // sessionStorage.myvar = 1;
  var i;
  // i = document.getElementById('formLang');
  $('[lang="en"]').toggle();
  $('[lang="lt"]').toggle();
  i = sessionStorage.getItem("lang");
  // alert("Lang = " + i);
  if(sessionStorage.myClick == 1) sessionStorage.myClick = 0;
  else sessionStorage.myClick = 1;
     // alert(", MyClick = " + sessionStorage.myClick);
  if(i =='en') {
    // document.getElementById('formLang').innerHTML='Lietuviškai';
    sessionStorage.setItem("lang", "lt");
  }
  else {
    // document.getElementById('formLang').innerHTML='English';
  sessionStorage.setItem("lang", "en");
}
   // alert("In clicklang " + sessionStorage.myvar);
if(sessionStorage.myvar!= 0) afterClick(sessionStorage.myvar);
// alert(sessionStorage.getItem("lang"));
}

function normall(x) {
  var x;
  x.style.color = "black";
  x.style.textDecoration= "none";
}

function normall2(x) {
  var x;
  x.style.backgroundColor = "transparent";
}

function afterClickTransfer() {
  var i = sessionStorage.myvar;
   // alert("In aferclicktransfer " + sessionStorage.myvar);
  if(i!=0)  afterClick(i);
}

    function changeTransfer(param) {
      var param;

      sessionStorage.myvar = param;
       // alert("In changetransfer " + sessionStorage.myvar);

      window.open('second-page.html',"_self");


      // afterClick(param);
      }

    function initMap(filename) {
      var filename;
      var str = selection[filename-1].xy;
           var uluru = {lat: Number(str.substring(0, str.indexOf(","))), lng: Number(str.substring(str.indexOf(",") + 1))};
           var map_element = document.getElementById( 'map');
           if( null !== map_element ) {
             var map = new google.maps.Map(document.getElementById("map"), {
             zoom: 14,
             center: uluru
           });
           if(filename > 3 )
           var marker = new google.maps.Marker({
             position: uluru,
             title: selection[filename-1].name,
             map: map
           });
           var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            uluru = {lat:55.637049 , lng:25.096984 };
            beachmarker = new google.maps.Marker({
             position: uluru,
             title: 'Sodyba 7',
             icon: image,
             map: map
           });
         }
         }

function goBack() {

     window.close();
     sessionStorage.myvar = 0;
     window.history.back();
     /*
     if(sessionStorage.myClick == 1)
       $('[lang="lt"]').hide();
       else $('[lang="en"]').hide(); */
};

    jQuery(document).ready(function($){
      document.querySelector("#burger-button").addEventListener('click',function(){
          var elem = document.querySelector('#mobile-navigation');
          elem.classList.toggle("hidden");
      });
    });
/*
      $(document).ready(function() {
        $("#second-pageID  span").click(function(){
          $(this).find('svg').toggleClass("fa-check-square fa-square");
        });
      });
  */
function mouseOut(x) {
  var x;
   x.style.backgroundColor = "transparent";
}
function mouseOver(x) {
  var x;
   x.style.backgroundColor = "#cccccc";
}

  function clickForm() {
        var elem = document.querySelector('#form-email');
        elem.classList.toggle("visible");
        document.getElementById('commentsid').value= "";
        document.getElementById('meniuid').value= "";
        document.getElementById('nameid').value= "";
        document.getElementById('emailid').value= "";
        formONOFF=!formONOFF;
        var i = document.getElementById('formID');
        var j = document.getElementById('formIDmobile');
        // alert('i = ' + i + ', j = ' + j);
        if(i != null) {
        i.onmouseout =  function() {mouseOut(i)};
        i.onmouseover =  function() {mouseOver(i)};
        }
        if(j != null) {
        j.onmouseout =  function() {mouseOut(j)};
        j.onmouseover =  function() {mouseOver(j)};
        }
/*
        if(formONOFF) { i.innerHTML = "Atšaukti";
                        j.innerHTML = "Atšaukti";}
        else  { i.innerHTML = "Užsakyti";
                j.innerHTML = "Užsakyti";

              } */
        cleanCheck();
        }

        function cleanCheck() {
          for ( var i = 0; i < selection.length; i++) {
              selection[i].click = 0;
              var x;
              x=document.getElementsByTagName('svg')[i];
              x.setAttribute("class", boxes[0]);
              if(formONOFF)
              x.style.cursor = "pointer";
              else
                x.style.cursor = "context-menu";
              }
        }

              function checkClick(filename) {
              var filename;
              var i, j, k, len;
              var x;
              var inter;
               x=document.getElementsByTagName('svg')[filename-1];
               if (sessionStorage.getItem("lang")=="lt") inter = selection[filename-1].name.Lt;
               else inter = selection[filename-1].name.Eng;


              if(formONOFF) {
                j = selection[filename-1].click;
                i  =  document.getElementById('meniuid');
                if(j==0) {
                  i.value+= inter;
                  i.value+="\n";
                  j = 1;
                  }
                  else {
                  j=0;
                  i.value="";
                  selection[filename-1].click = j;
                  len = selection.length;
                  for ( k = 0; k < len; k++) {
                      if (selection[k].click == 1) {
                        if (sessionStorage.getItem("lang")=="lt") inter = selection[k].name.Lt;
                        else inter = selection[k].name.Eng;
                      i.value+= inter;
                      i.value+="\n";
                    }
                  }
                }
              x.setAttribute("class", boxes[j]);
              selection[filename-1].click = j;
              }
            }

    function afterClick(filename) {
      var filename;
      var name;
      var langParam;
      var coordText = 'Coordinates: ';
      var addrText = 'Address: ';
      var midname='Images/img' + filename;
      name = midname + '1.jpg';
      sessionStorage.myvar = filename;  /*  kam to reikia ? */
       // alert('After click ' + sessionStorage.getItem("lang"));
      // alert(selection[filename-1].name.Eng);
      // alert(selection[filename-1].name.Lt);
      document.getElementById('img1').src = name;
      document.getElementById('img2').src = midname + '2.jpg';
      document.getElementById('img3').src = midname + '3.jpg';

      document.getElementById('loadCont').innerHTML = selection[filename-1].cont;
      langParam = sessionStorage.getItem("lang");

       if( langParam =="lt") {
         coordText = 'Koordinatės: ';
         addrText ='Adresas: ';
        document.getElementById('loadText').innerHTML =  selection[filename-1].text.Lt;
          document.getElementById('loadHeader').innerHTML = selection[filename-1].head.Lt;
      }
        else {
        document.getElementById('loadText').innerHTML =  selection[filename-1].text.Eng;
          document.getElementById('loadHeader').innerHTML = selection[filename-1].head.Eng;

      }
      if (selection[filename-1].cont[0] == 'h')
      document.getElementById('loadCont').href = selection[filename-1].cont;
      else document.getElementById('loadCont').href ="javascript:void(0)";

      document.getElementById('loadXy').innerHTML =  coordText + selection[filename-1].xy;
        document.getElementById('loadAddress').innerHTML = addrText + selection[filename-1].addr;

      initMap(filename);

      }
