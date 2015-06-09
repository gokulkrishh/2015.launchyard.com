'use strict';

/*global $, window, document*/

$(document).ready(function() {

  $(document).foundation();
  
  if( $(window).width()> $(window).height() && $(window).width() > 768 ) {
   
    var newHeight = $(window).height();
   
    $('.getHeight').css('height', newHeight);
    $('.navPoint').css('display','block');
    $('.freeLandingPage .inviteBox ').css({
      position: 'absolute',
      bottom: 0
    });

  	var $root = $('html, body');
	  $('#learnMore, .about, .location,.faqsection_tab').click(function() {
	    $root.animate({
	      scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 700);
	   
	    return false;
  	});
  }
  
  $('.recommend li').hover(function() {
      $('.recommend li[class="active"]').removeClass('active');
      $(this).addClass('active');
    },
    function() { 
    	$(this).removeClass('active');
    }
  );

  $('#getFocus').click(function() {
    $('#getInTouch ').find('input').focus();
  });


    $(".jumper").on("click", function( e ) {
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 600);
    });

    $(document).scroll(function (){
        var y = $(this).scrollTop();
        if (y > 493) {
            $('#scrollMenu').removeClass("selectTab").addClass("selectTab1");
        } else {
            $('#scrollMenu').removeClass("selectTab1").addClass("selectTab");
        }
    });
    $('nav a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    })
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.wrapper section').each(function(i) {
                if ($(this).position().top <= windscroll + 250) {
                    $('#scrollMenu a.selectedtab').removeClass('selectedtab');
                    $('#scrollMenu a').eq(i).addClass('selectedtab');
                }
            });
        }
        else{
            $('#scrollMenu a.selectedtab').removeClass('selectedtab');
        }
    });

});