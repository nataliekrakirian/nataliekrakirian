$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $('.anchor-scroll').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html,body').animate({
        scrollTop: $(target).offset().top - 48
      }, 1000);
    });
     $('.submit-button').on('click', function () {
      $(".form-hovered-wrapper").addClass("form-hovered-caption-active");
      $(".form-hovered-caption").addClass("form-hovered-caption-active");
     });
});

$(document).ready(
    
  function () {
  loadGallery(true, 'a.project-thumbnail');
  function loadGallery(setIDs, setClickAttr){
      var current_image,
          counter,
          clicked_image = 0;
      function updateGallery(selector) {
          var $sel = selector;
          current_image = $sel.data('image-id');
          $('#modal-project-title').text($sel.data('project-title'));
          $('#modal-project-description').text($sel.data('project-description'));
          $('#modal-project-solution').text($sel.data('project-solution'));
          $('#modal-project-image').attr('src', $sel.data('project-image'));
          //disableButtons(counter, $sel.data('image-id'));
      }
      $('a.project-thumbnail').on('click',function(){
          updateGallery($(this));
      });
  }
  /*$(".navbar-nav li a").click(function(event) {
    if ($(this).hasClass("dropdown-element") || $(this).hasClass("dropdown-toggle")) {
   
    } else {
        $(".navbar-collapse").collapse('hide');
    }
  });*/
  $(".fadeInAmate").fadeInAmate({
    initialDelay: 250,
    fadeInSpeed: 900,
    animationDelay: 300,

    // enable the slide down animation
    bounce: true
  });
});
$('.anchor-scroll').on('click', function(){
  $('.navbar-collapse').collapse('hide');
}); 
/*
console.log('semi-transparent class is not applied');
$(document).ready(
  function () {
    var iOS;
    if(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
      iOS = true;
    } else {
      iOS = false;
    }
    if(iOS && $('.two-thirds-page-margin').css('min-height') == '66.666666666vh'){
      $('.two-thirds-page-margin').css('min-height', '0');
    }
  }
);*/

/*THINGS TO ASK RYAN ABOUT

Navbar transparency
Parallax on subheads
Scaling text on subheads
Weird nav mobile issues
Backgrounds on mobile
Feasability of sideways expanding accordion

*/

(function(e){"use strict";function r(t,n){this.opts=e.extend({handleKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},n);this.$container=t;this.$document=e(document);this.lockToScrollPos=[0,0];this.disable()}var t,n;n=r.prototype;n.disable=function(){var e=this;e.lockToScrollPos=[e.$container.scrollLeft(),e.$container.scrollTop()];e.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",e._handleWheel);e.$container.on("scroll.disablescroll",function(){e._handleScrollbar.call(e)});e.opts.handleKeys&&e.$document.on("keydown.disablescroll",function(t){e._handleKeydown.call(e,t)})};n.undo=function(){var e=this;e.$container.off(".disablescroll");e.opts.handleKeys&&e.$document.off(".disablescroll")};n._handleWheel=function(e){e.preventDefault()};n._handleScrollbar=function(){this.$container.scrollLeft(this.lockToScrollPos[0]);this.$container.scrollTop(this.lockToScrollPos[1])};n._handleKeydown=function(e){for(var t=0;t<this.opts.scrollEventKeys.length;t++)if(e.keyCode===this.opts.scrollEventKeys[t]){e.preventDefault();return}};e.fn.disablescroll=function(e){!t&&(typeof e=="object"||!e)?t=new r(this,e):t&&t[e]&&t[e].call(t)};window.UserScrollDisabler=r})(jQuery);
//SOLID JAVASCRIPT
$(document).ready(
  function () {
    var $win = $(window);
    var winH = $win.height()/2;
    var winT = $win.height(); 
    function checkScroll(){
      /*console.log("Window top: " + winT)*/
      if($win.scrollTop() < winH){
      $(".navbar-header").removeClass("semi-transparent");
      $(".icon-bar").removeClass("background-color-dark-gray");
      }else if($win.scrollTop() > winH){
      $(".navbar-header").addClass("semi-transparent");
      $(".icon-bar").addClass("background-color-dark-gray");
      }
    }//closed check scroll

    $(".navbar").on('show.bs.collapse', function () {
      /*console.log('show.bs.collapse');*/
      $(".navbar").disablescroll();
      if($(window).scrollTop() < winH){
        $(".navbar").addClass("semi-transparent");
        $(".icon-bar").addClass("background-color-dark-gray");
      } else if($(window).scrollTop() > winH){
        $(".navbar-collapse").addClass("semi-transparent");
      }
      //$('.navbar-default .navbar-nav > li > a').css('color', 'rgba(55, 62, 76, 1)');
    });
    $('.navbar').on('hidden.bs.collapse', function () {
      /*console.log('show.bs.collapse');*/
      if($(window).scrollTop() < winH){
        $(".navbar").removeClass("semi-transparent");
        $(".navbar").disablescroll("undo");
        $(".icon-bar").removeClass("background-color-dark-gray");
      } else if($(window).scrollTop() > winH) {
        $(".navbar-collapse").removeClass("semi-transparent");
        $(".navbar").disablescroll("undo");
      }
      //$('.navbar-default .navbar-nav > li > a').css('color', 'rgba(55, 62, 76, 0)');
    });
    /*console.log($win.scrollTop())
    $( '.parallax-element' ).each(function(index) {
      console.log( index + ": " + $(this).offset().top);
    });*/
    
    if($(".navbar").length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }
  }
);

$(document).ready(
  function () {
    /*var windowTop = $(window).scrollTop(); */
    $(window).scroll(function() { //when window is scrolled
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      /*console.log('Window top position: ' + windowTop);
      console.log('Window bottom position: ' + windowBottom);*/
      $( '.parallax-container' ).each(function(index) {
        var elementTop = $(this).offset().top; //get the offset top of the element
        var deltaTop = elementTop - windowTop;
        var deltaBottom = elementTop - windowBottom;
        /*console.log('Element position: ' + elementTop);*/
        /*console.log(index + ':' + 'Element position: ' + deltaBottom);*/
        if (deltaBottom <= 0 && (((deltaTop - $('.navbar').height()) + $(this).height()) > 0)) {
            var parallaxElement = $('.parallax-container > .row > .col-xs-12 > .parallax-element');
            $(parallaxElement).css({'transform': 'translate(0px, '+(((deltaBottom+50)* (-1))/4)+'px)'});
            //console.log("Element " + index + " is being changed")
            //console.log(((deltaTop - $('.navbar').height()) + $(this).height()));
            //console.log(deltaBottom/10);
            //console.log( parallaxElement.offset().top);            
            //ADD TRANSITION TO PARALLAX-ELEMENT CLASS
            //console.log(index + ":" + $('.parallax-container > .row > .col-xs-12 > .parallax-element').offset().top);
          };
      });
      
    });
  });

$(document).ready(function () {
  $( "#statistics-expand" ).click(function(e) {
    //console.log("stat button clicked");
    e.preventDefault();
    //console.log("Target: " + target)
    $('html,body').animate({
      scrollTop: $(window).scrollTop() + $(window).height() - ($(window).height()/3)
    }, 1000);
  });
});
//css({'transform':'translate3d('+l+'px, '+t+'px, 0)'