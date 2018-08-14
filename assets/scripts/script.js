SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
$(document).ready(function() {

//---------1st-------------//
  SC.stream('/tracks/298806717',function(sound){
  $('#play1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
  $('#stop1').click(function(e) {
            e.preventDefault();
            sound.stop();
            });
 });

//--------------Mersal---------------------
 SC.stream('/tracks/338326252',function(sound){
 $('#play2').click(function(e) {
            e.preventDefault();
            sound.start();
          });
 $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
           });
});

//------------------remo--------------------
SC.stream('/tracks/317969885',function(sound){
$('#play3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop3').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//-----------------vanamagan-------------
SC.stream('/tracks/319079744',function(sound){
$('#play4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop4').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//---------------katruveliyidai--------------
SC.stream('/tracks/314680188',function(sound){
$('#play5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop5').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//-------------------irumugan-----------
SC.stream('/tracks/282542457',function(sound){
$('#play6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop6').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//--------------bahubali-------------
SC.stream('/tracks/322255084',function(sound){
$('#play7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop7').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//----------------vip2-------------------
SC.stream('/tracks/187624765',function(sound){
$('#play8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop8').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//------------7m arivu-----------------
SC.stream('/tracks/27908248',function(sound){
$('#play9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop9').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//-------------theri-------------------
SC.stream('/tracks/285244004',function(sound){
$('#play10').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop10').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//-------------Nejukkul peithidum------------
SC.stream('/tracks/36719642',function(sound){
$('#play11').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop11').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});

//------------sivakarthikeyan---------------
SC.stream('/tracks/279113451',function(sound){
$('#play12').click(function(e) {
           e.preventDefault();
           sound.start();
         });
$('#stop12').click(function(e) {
          e.preventDefault();
          sound.stop();
          });
});
});


  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });
