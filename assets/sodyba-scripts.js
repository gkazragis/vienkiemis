

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
    // 2. This code loads the IFrame Player API code asynchronously.

        sessionStorage.setItem("lang", "lt");
        
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            height: '200',
            width: '200',
            videoId: 'M7lc1UVf-VE',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
/*
        $('button').click(function(){
        	$('html, body').animate({
        		scrollTop: $('.element-to-scroll-to').offset().top
        	}, 1000);
        });
  */
      jQuery(document).ready(function($){

        document.querySelector("#burger-button").addEventListener('click',function(){
            var elem = document.querySelector('#mobile-navigation');
            elem.classList.toggle("hidden");
        });

      });



function Siandien(kur)
{
  var kur;
//alert(kur);

var n =  new Date();
var add0m = "0";
var add0d = "0";
var y = n.getFullYear();
var m = n.getMonth() + 1;
if(m>9) add0m = "";
var d = n.getDate();
if(kur=="isvykimas") d+=1;
if(++d>9) add0d = "";

var today= y + "-" + add0m + m + "-" + add0d + d;
  document.getElementById(kur).value=today;
};



 function DoSubmit()
 {

var elem = document.getElementById("submit");
//alert(elem);
var i_in = document.getElementById("atvykimas").value;
var i_out = document.getElementById("isvykimas").value;

//alert(iin);
//alert(oout);
  if (i_out>i_in) {
    elem.value = "Laisva!";
     elem.style.backgroundColor = "green";
  } else {
    elem.value = "Užimta!";
    elem.style.backgroundColor = "red";
  }
};
