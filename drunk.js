/* 

See http://sayemislam.com for a demonstration of this script.

Every time you click on a div encompassing all the links on the page, a counter instantly resets the link url to a new link, 
which changes with each additional click.       

*/

var start=[];
for(var i=0; i<document.links.length; i++) { start[i]=[document.links[i].href] };
var change = document.getElementById('subwaymap');  // Substitute a div id on your page for 'subwaymap' 

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

// newlinks is an array of the new hyperlinks you want set to the counter for each click that the user makes

var newlinks = ["http://sayemislam.com/blog","http://github.com/sayem","http://twitter.com/sayemislam","mailto:mail@sayemislam.com?subject=Re:&body=%0A%0A%0A%0A------------%0A%0AHey, thanks for visiting my site and clicking through.%0A%0AIf we don't know each other already, I'd love to connect. And if you're in the area too,%0Alet's plan on grabbing coffee/tea/anything-you're-in-the-mood-for sometime.%0A%0AI promise good conversation.%0A%0ASayem"];

function stumble() {
    for (var i=0; i<document.links.length; i++) {
	document.links[i].href = misdirect();
    }
}

// The counter is dependent on how many items are in the newlinks array and how many links are on the page. There are 20 links on sayemislam.com and there are 4 links in var newlinks, which is why the counter is in four different ranges of 20. After the final click, the fourth one in this case, the counter is reset to newlinks[0]. 

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
    else
	x = 0;
    return newlinks[0];
}