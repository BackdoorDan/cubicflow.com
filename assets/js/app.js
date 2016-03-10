// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------
$(document).foundation();


//
// Custom JS
// --------------------------------------------------
$(document).on('ready', function(){

  // Init asset replacement
  cf.assets.init();

  // If snapshots exist init modalGallery
  if (document.querySelectorAll('.shapshots-grid__snapshot').length > 1) {
      cf.modalGallery('.shapshots-grid__snapshot');
  }

  // Mobile Nav
  var $expandBtn = $('.nav-toggle-btn');
  var $mobileNav = $('.nav__expanded');
  var $mobileNavOverlay = $('.nav__expanded-overlay');

  var toggleNav = function(){
    $mobileNav.toggleClass('active');
    $mobileNavOverlay.toggleClass('active');
    $expandBtn.toggleClass('active');
  };

  $expandBtn.on('click', toggleNav);
  $mobileNavOverlay.on('click', toggleNav);
  //

});
