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

cf.assets.init();


//
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
