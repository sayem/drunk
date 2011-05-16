
var start=[];for(var i=0; i<document.links.length; i++){start[i]=[document.links[i].href]};

var change = document.getElementById('subwaymap');
change.addEventListener('click', stumble, true);
change.addEventListener('click', titles, true);
change.addEventListener('mouseout', back, true);

function titles() {
	for (var i=0; i<document.links.length; i++) {
	document.links[i].title = tooltips[i];
	}
}

function back() {
	for (var i=0; i<document.links.length; i++) {
	document.links[i].href = start[i];
	}
}

var newlinks = ["http://github.com/sayem","http://linkedin.com/in/sayemislam","http://twitter.com/sayemislam","http://news.ycombinator.com/submitted?id=sayemm","http://meetup.com/members/7519621","mailto:mail@sayemislam.com?subject=Re:&body=%0A%0A%0A%0A------------%0A%0AHey, thanks for visiting my site and clicking through.%0A%0AIf we don't know each other already, I'd love to connect. And if you're in the area too,%0Alet's plan on grabbing coffee/tea/anything-you're-in-the-mood-for sometime.%0A%0AI promise good conversation.%0A%0ASayem"];

function stumble() {
	for (var i=0; i<document.links.length; i++) {
	document.links[i].href = misdirect();
	}
}

var x = 0;
function misdirect() {
	x += 1;
	if (x <= 20)
		return newlinks[0];
	else if (x > 20 && x <= 40)
		return newlinks[1];
	else if (x > 40 && x <= 60)
		return newlinks[2];
	else if (x > 60 && x <= 80)
		return newlinks[3];
	else if (x > 80 && x <= 100)
		return newlinks[4];
	else if (x > 100 && x <= 120)
		return newlinks[5];
	else
		x = 0;
		return newlinks[0];
}