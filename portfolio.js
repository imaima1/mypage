$(function(){
    
    $('head').append(
        '<style>.home{display:none;}'
    );
    $(window).on("load", function() {
        $('.home').fadeIn(2000);
    });

    $(window).scroll(function(){
        scroll_effect();
    });

    function scroll_effect(){
        $('.fadein').each(function(){
         var elemPos = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight){
          $(this).addClass('scrollin');
         }
        });
       }
    
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
/*
    $('.study-skill-hover').hover(
        function() {
          $(this).find('.study-text').addClass('text-active');
          
        },
        function() {
          //$(this).find('.study-text').removeClass('text-active');
          $(this).find('.study-text').addClass('text-active');
          
        }
      );
*/
    $('#menu-icon').click(function(){
        $(this).toggleClass('active');

　      if ($(this).hasClass('active')) {
　　        $('.menu').addClass('active');
　      } 
        else {
　　        $('.menu').removeClass('active');
　      }
    });

});