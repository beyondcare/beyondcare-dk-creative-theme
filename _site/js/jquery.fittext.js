/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert https://daverupert.com
* Released under the WTFPL license
* https://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/(function(a){a.fn.fitText=function(c,d){var e=c||1,b=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},d);return this.each(function(){var c=a(this),d=function(){c.css('font-size',Math.max(Math.min(c.width()/(e*10),parseFloat(b.maxFontSize)),parseFloat(b.minFontSize)))};d(),a(window).on('resize.fittext orientationchange.fittext',d)})}})(jQuery)