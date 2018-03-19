var sun = document.getElementById('zon');

var tl1 = new TimelineMax();
// tl1.to(zon, 1, {top: 40});
// tl1.to(zon, 1, {top: 200, ease:Power0.easeOut});
// tl1.to(zon, 1, {top: 200, ease:Bounce.easeOut});
tl1.to(sun, 1, {top: 40, ease:Elastic.easeOut});
// tl1.to(zon, 1, {top: 200, ease:Elastic.easeIn})

var information = document.getElementById('info');

var tl3 = new TimelineMax();

tl3.to(information, 1, {opacity: 1.0, ease:Power2.easeIn});

var moon = document.getElementById('half');

var test = new TimelineMax();
test.to(moon, 1, {top: 40, ease:Elastic.easeOut});

