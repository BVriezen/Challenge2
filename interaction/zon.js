
// Animation for sun
var sun = document.getElementById('zon');

var tl1 = new TimelineMax();

tl1.to(sun, 1, {top: 40, ease:Elastic.easeOut});

// Animation for infoblok
var information = document.getElementById('info');

var tl3 = new TimelineMax();

tl3.to(information, 1, {opacity: 1.0, ease:Power2.easeIn});

// Animation for moon
var moon = document.getElementById('half');

var test = new TimelineMax();
test.to(moon, 1, {top: 40, ease:Elastic.easeOut});

