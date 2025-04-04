/**
 * Frank Wu
 * 7/12/23
 * Section AD Tara
 * this is a javascript file that controls the show video button
 * and scroll to the top click functionality
 */

"use strict";
(function() {

  let wushuVideoAdded = false;
  window.addEventListener("load", init);

  /** creates event listeners for scrolling to the top and showing the video in wushu */
  function init() {
    qs("button").addEventListener("click", handleButtonClick);
    qs("footer h1").addEventListener("click", handleToTheTop);
  }

  /** scrolls the window to the top of the page */
  function handleToTheTop() {
    window.scrollTo(0, 0);
  }

  /**
   * toggles the button for showing the video. It expands the section and shows the video
   * or shinks the section and removes the video if it is already there
   */
  function handleButtonClick() {
    if (!wushuVideoAdded) {
      wushuVideoAdded = true;
      const vid = document.createElement("iframe");
      vid.src = "https://www.youtube.com/embed/1ecljzfYKVM";
      vid.title = "YouTube video player";
      vid.allow = "accelerometer; autoplay; clipboard-write;" +
        " encrypted-media; gyroscope; picture-in-picture; web-share";
      vid.allowFullscreen = true;
      const wushu = id("wushu");
      wushu.prepend(vid);
      qs("button").textContent = "Hide";
      qs("#wushu img").classList.add("hidden")
      $(qs("#wushu img")).stop().animate({ 'opacity': '0' }, 0);
      // wushu.classList.add("make-wider");

    } else {
      wushuVideoAdded = false;
      qs("button").textContent = "Watch me on Youtube!";
      const wushu = id("wushu");
      wushu.removeChild(qs("iframe"));
      // wushu.classList.remove("make-wider");
      qs("#wushu img").classList.remove("hidden")
      $(qs("#wushu img")).stop().animate({ 'opacity': '1' }, 800);
    }
  }


  window.toggleTrimbleText =  function toggleTrimbleText() {
    const content = id("trimble_text");
    const button = document.querySelector(".read-more");
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        button.innerText = "Read More";
    } else {
        content.classList.add("expanded");
        button.innerText = "Read Less";
    }
}



  /**
   * returns the element of the given id
   * @param {string} id - the id to find the element of
   * @return {HTMLElement} - the desired element
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * returns the first element with the given selector
   * @param {string} selector - the selector to find the element of
   * @return {HTMLElement} - the desired element
   */
  function qs(selector) {
    return document.querySelector(selector);
  }





})();



// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

// $(document).ready(function() {

//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){

//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){

//             var bottom_of_object = $(this).position().top + $(this).outerHeight()/2;
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             console.log(this)

//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){

//                 $(this).animate({'opacity':'1'},800);
//             }

//         });

//     });

// });


$(document).ready(function() {
  $('.monster').fadeIn('slow');

  /* Throttle the scroll event to limit execution frequency */
  var throttleTimer;
  $(window).on('scroll', function() {
      clearTimeout(throttleTimer);
      throttleTimer = setTimeout(checkElementsVisibility, 250);
  });

  function checkElementsVisibility() {
      $('.hideme').each(function(i) {
          var bottom_of_object = $(this).position().top + $(this).outerHeight() / 3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > bottom_of_object) {
              $(this).stop().animate({ 'opacity': '1' }, 800);
          }
      });
  }

  // Initial check when the page loads
  checkElementsVisibility();
});