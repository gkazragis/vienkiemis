
/*
  $('button').click(function() {
    $(this).toggleClass('expanded').siblings('ul').slideToggle();
  });

  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 0) {
      $('.nav-main').addClass('nav-shrink');
    } else {
      $('.nav-main').removeClass('nav-shrink');
    }
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
  });


  var offset = 600;
  var duration = 300;

  jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() > offset) {

    jQuery('.back-to-top').fadeIn(duration);
    } else {
    jQuery('.back-to-top').fadeOut(duration);
    }

  });


  jQuery('.back-to-top').click(function(event) {

    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;

  });

  $(document).on('click', '[data-lightbox]', lity);

  console.log('test');
*/
/*
1.Parašykite JavaScript ciklą, kuris iteruoja nuo 0 iki 15.
Kiekviena iteracija turi tikrinti ar skaičius yra lyginis ar nelyginis.
Rezultatas turi būti išvedamas į konsolę tokiu formatu: ‘0 yra nelyginis’,
‘1 yra lyginis ’ ir t.t.

*/
$(function() {

var input = 15;
console.log('Test');
for (var i = 0; i < input; i++) {
  	if (i%2 == 0)
    console.log(i + ' yra nelyginis');
		//return true;
	else
  console.log(i + ' yra lyginis');
		//return false;
}

});

/*
2.Parašykite JavaScript funkciją, kuri priima du parametrus:
pirmas parametras - tekstas (string), o antras parametras raidė.
 Funkcija turi suskaičiuoti, kiek tekste pasikartoja mūsų paduoda raidė.
*/
});
