<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vienkiemis:pasirinkimai</title>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZVyZSWhU6B8WSo2Ac0DZjqUhgwde1FzM"> </script>
  <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/reset.css">
  <link rel="stylesheet" href="fonts/stylesheet.css">
  <link rel="stylesheet" href="assets/style.css">
  <link rel="stylesheet" href="assets/style-second.css">
  <link rel="stylesheet" href="fonts/great-vibes/stylesheet.css">

  <script defer src="assets/fontawesome-all.js"></script>
  <script src="assets/jquery-3.2.1.min.js"></script>

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="assets/sodyba-second-scripts.js"></script>



</head>
<body>


  <header>

   <div class="container flex-container " >

      <?php  include("kepure.html"); ?>
      <!-- <div w3-include-html="kepure.html"></div> -->
      <nav class="nav-container" > <!-- NAVIGATION -->
        <ul class="nav flex-container">
          <li>
            <!-- <button id="switch-lang" >Switch Language</button> -->
            <a  id="formLang"  href="javascript:void(0)" onclick='clickLang()' ><span lang="lt">English</span><span lang="en">Lietuviškai</span></a>
          </li>
          <li>
            <a  id="formID" href="javascript:void(0)"  onclick='clickForm()'><span lang="lt">Užsakyti</span><span lang="en">Order</span></a>
            </li>
          <li>
            <a  href="javascript:void(0)" onclick='goBack()'><span lang="lt">Grįžti</span><span lang="en">Back</span></a>
            </li>
        </ul>
      </nav>
      <nav  class="mobile ">
        <button type="button" name="mobile" id="burger-button"><img src="http://i.imgur.com/vKRaKDX.png"  style="width:30px;height:30px;" alt="burger"></button>
        <ul id="mobile-navigation" class="nav mobile-flex-container hidden">
          <li>
            <!-- <button id="switch-lang" >Switch Language</button> -->
            <a  id="formLang"  href="javascript:void(0)" onclick='clickLang()' ><span lang="lt">English</span><span lang="en">Lietuviškai</span></a>
          </li>
          <li>
            <a  id="formID" href="javascript:void(0)"  onclick='clickForm()'><span lang="lt">Užsakyti</span><span lang="en">Order</span></a>
            </li>
          <li>
            <a  href="javascript:void(0)" onclick='goBack()'><span lang="lt">Grįžti</span><span lang="en">Back</span></a>
            </li>
        </ul>
      </nav>
  </header>

<!--  Duomenu uzklausos forma-->
<div id="second-pageID" class="second-page">
  <div class="class-1">
    <div class="class-1menu">
      <h3 style=" background: linear-gradient(to bottom, #ffffff 0%, #336600 100%) "><span lang="lt">Paslaugos</span><span lang="en">Services</span></h3>
      <ul  class="nav-menu">
        <nav class="nav nav-container">
          <li id="logistika">
            <span onclick='checkClick("1")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("1")' style="flex-grow: 2"> <span lang="lt">Organizavimas</span><span lang="en">Logistics</span></a>
          </li>
          <li id="transportas">
            <span onclick='checkClick("2")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("2")' style="flex-grow: 2"> <span lang="lt">Transportas</span><span lang="en">Transportation</span></a>
          </li>
          <li id="apgyvendinimas">
            <span onclick='checkClick("3")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("3")' style="flex-grow: 2"> <span lang="lt">Apgyvendinimas</span><span lang="en">Accomodation</span></a>
          </li>
        </nav>
      </ul>
      <h3 style="background: linear-gradient(to bottom, #ffffff 0%, #336600 100%)"> <span lang="lt">Pramogos</span><span lang="en">Entertainment</span></h3>
      <ul  class="nav-menu">
        <nav class="nav nav-container">
          <li id="masazas">
            <span onclick='checkClick("4")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("4")' style="flex-grow: 2"> <span lang="lt">Masažas ir pirtis</span><span lang="en">Massage and SPA</span></a>
          </li>
          <li id="joga">
            <span onclick='checkClick("5")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("5")' style="flex-grow: 2"> <span lang="lt">Meditacija ir joga</span><span lang="en">Meditation & yoga</span></a>
          </li>
          <li id="keramika">
            <span onclick='checkClick("6")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("6")' style="flex-grow: 2"> <span lang="lt">Keramika</span><span lang="en">Pottery</span></a>
          </li>
          <li id="baidares">
            <span onclick='checkClick("7")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("7")' style="flex-grow: 2"> <span lang="lt">Baidarės</span><span lang="en">Kayaks</span></a>
          </li>
          <li id="jodinejimas">
            <span onclick='checkClick("8")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("8")' style="flex-grow: 2"> <span lang="lt">Jodinėjimas</span><span lang="en">Horse riding</span></a>
          </li>
          <li id="siaurukas">
            <span onclick='checkClick("9")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("9")' style="flex-grow: 2"> <span lang="lt">Siaurukas</span><span lang="en">Narrow-gauge train</span></a>
          </li>
          <li id="lajutakas">
            <span onclick='checkClick("10")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("10")' style="flex-grow: 2"> <span lang="lt">Lajų takas</span><span lang="en">Treetop Walking</span></a>
          </li>
          <li id="kartimgas">
            <span onclick='checkClick("11")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("11")' style="flex-grow: 2"> <span lang="lt">Kartingas</span><span lang="en">Carting</span></a>
          </li>
          <li id="Bezdzionių tiltas">
            <span onclick='checkClick("12")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("12")' style="flex-grow: 2"> <span lang="lt">Mikierių tiltas</span><span lang="en">Suspention bridge</span></a>
          </li>
          <li id="angelu muziejus">
            <span onclick='checkClick("13")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("13")' style="flex-grow: 2"> <span lang="lt">Angelų muziejus</span><span lang="en">Museum of angels</span></a>
          </li>
          <li id="kalitos kalnas">
            <span onclick='checkClick("14")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("14")' style="flex-grow: 2"> <span lang="lt">Kalitos kalnas</span><span lang="en">Kalita's mountain</span></a>
          </li>
          <li id="puntuko akmuo">
            <span onclick='checkClick("15")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("15")' style="flex-grow: 2"> <span lang="lt">Puntuko akmuo</span><span lang="en">Puntukas' stone</span></a>
          </li>
          <li id="arklio muziejus">
            <span onclick='checkClick("16")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("16")' style="flex-grow: 2"> <span lang="lt">Arklio muziejus</span><span lang="en">Horse museum</span></a>
          </li>
          <li id="pintiniu muziejus">
            <span onclick='checkClick("17")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("17")' style="flex-grow: 2"> <span lang="lt">Pintinių muziejus</span><span lang="en">Museum of baskets</span></a>
          </li>
          <li id="vandenlentes">
            <span onclick='checkClick("18")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("18")' style="flex-grow: 2"> <span lang="lt">Vandenlentės</span><span lang="en">Waterfalls</span></a>
          </li>
          <li id="laipyniu parkas">
            <span onclick='checkClick("19")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("19")' style="flex-grow: 2"> <span lang="lt">Laipynių parkas</span><span lang="en">Trail park</span></a>
          </li>
          <li id="pusu takas">
            <span onclick='checkClick("20")'><i class="far fa-square" style=""></i></span>
            <a href="javascript:void(0)" onclick='afterClick("20")' style="flex-grow: 2"> <span lang="lt">Pušų Takas</span><span lang="en">'Pine Trail' hotel</span></a>
          </li>
        </nav>
      </ul>
    </div>
    <div   id="loadClass2" class="class-2text" >
      <h3  id="loadHeader"></h3>
        <table style="width: 100%">
          <tr>
            <td>
            <div id="myCarousel" class="carousel slide class-2text-img" data-ride="carousel">
            <!-- Wrapper for slides -->
              <div class="carousel-inner ">
                <div class="item active ">
                  <img id="img1" src="" style="" alt="pic1">
                </div>
                <div class="item ">
                  <img id="img2" src="" style="" alt="pic2">
                </div>
                <div class="item ">
                  <img id="img3" src="" style="" alt="pic3">
                </div>
              </div>
            </div>
            </td>
          </tr>
        </table>

      <p   id="loadAddress"></p><!-- <img  src="Images/sodyba.jpg" alt="sodyba">  -->
      <a   id="loadCont" href="" target="_blank" style="padding-left: 20px;"></a>
      <p   id="loadXy"></p>
      <p   id="loadText"></p>

    </div>
  </div>
  <div class="class-2" style="">
    <div style="padding:10px">
     <div id="map" class="map-container-2" >
     </div>
   </div>

     <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d71242.1366324623!2d25.0891338!3d55.5887563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM4JzEzLjIiTiAyNcKwMDUnNDUuNiJF!5e1!3m2!1slt!2slt!4v1516710921453"  frameborder="0" style="border:0" allowfullscreen></iframe> -->
     <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d288120.15612701204!2d24.89950813036042!3d55.655274786976484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zS2F0YWxpa8WzIGJhxb5uecSNaWE!5e0!3m2!1slt!2slt!4v1523006662735" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
   <div class="form-class notVisible" id="form-email">
       <h3><span lang="lt">Pageidavimai</span><span lang="en">Requests</span></h3>
       <form method="POST" name="contactform" action="contact-form-handler.php">
       <p>
       <label for='name'><span lang="lt">Jūsų vardas:</span><span lang="en">Name:</span></label> <br>
       <input id="nameid" type="text" size="16" name="name"> <br>
       </p>
       <p>
       <label for='email'><span lang="lt">E-mail adresas:</span><span lang="en">Email:</span></label> <br>
       <input id="emailid" type="text" size="16" name="email"> <br>
       </p>

       <p>
       <label for='date-in'><span lang="lt">Atvykimas:</span><span lang="en">Arrival:</span></label> <br>
       <input type="date" name="date"> <br>
       </p>
       <p>
       <label for='date-out'><span lang="lt">Išvykimas:</span><span lang="en">Departure:</span></label> <br>
       <input type="date" name="date"> <br>
       </p>

       <p>
       <label for='meniu'><span lang="lt">Pasirinkite iš meniu:</span><span lang="en">Choose from menu:</span></label> <br>
       <!-- <textarea id="messageid" style="pointer-events: none;" onkeypress="return false;" rows ="3" value=" " name="message"></textarea> -->
       <textarea id="meniuid"  readonly  rows ="3" cols = "18" value=" " name="meniu"></textarea> <br>
       <!-- <textarea id="meniuid" disabled   rows ="3" value=" " name="meniu"></textarea> -->
<!--  su disabled nepersiduoda menu elementai-->
       </p>
       <p>
       <label for='message'><span lang="lt">Komentarai:</span><span lang="en">Comments:</span></label> <br>
       <textarea id="commentsid" rows ="3" cols = "18" value=" " name="message"></textarea> <br>
       </p>
       <input lang="lt" type="submit" value="Siųsti"><br>
       <input lang="en" type="submit" value="Send"><br>
       </form>
     </div>
  </div>
</div>
<!--       FOOTER        -->
<footer>
    <div class="foooter-container" >
      <br>
      <p> <span lang="lt">Sukūrė </span><span lang="en">Created by </span><a href="#" target="_blank">www.sodyba7.eu</p>
    </div>
</footer>
<script type="text/javascript">

if(sessionStorage.myClick == 0) {
  $('[lang="en"]').hide();
  // sessionStorage.myClick = 1;
}
  else {
     $('[lang="lt"]').hide();
     // sessionStorage.myClick = 0;
   }
             // sessionStorage.myClick = 0;
  afterClickTransfer();
</script>
</body>
</html>
