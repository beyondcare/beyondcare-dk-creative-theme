/*!
 * Start Bootstrap - Creative Bootstrap Theme (https://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see https://www.apache.org/licenses/LICENSE-2.0.
 */(function(a){"use strict";a('a.page-scroll').bind('click',function(b){var c=a(this);a('html, body').stop().animate({scrollTop:a(c.attr('href')).offset().top-50},1250,'easeInOutExpo'),b.preventDefault()}),a('body').scrollspy({target:'.navbar-fixed-top',offset:51}),a('.navbar-collapse ul li a').click(function(){a('.navbar-toggle:visible').click()}),a("h1").fitText(1.2,{minFontSize:'35px',maxFontSize:'65px'}),a('#mainNav').affix({offset:{top:100}}),(new WOW).init()})(jQuery)