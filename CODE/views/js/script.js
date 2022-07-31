const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});

	}
	else {
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});

	}
});

function nameDefined(ckie, nme) {
	var splitValues
	var i
	for (i = 0; i < ckie.length; ++i) {
		splitValues = ckie[i].split("=")
		if (splitValues[0] == nme) return true
	}
	return false
}

function delBlanks(strng) {
	var result = ""
	var i
	var chrn
	for (i = 0; i < strng.length; ++i) {
		chrn = strng.charAt(i)
		if (chrn != " ") result += chrn
	}
	return result
}
function getCookieValue(ckie, nme) {
	var splitValues
	var i
	for (i = 0; i < ckie.length; ++i) {
		splitValues = ckie[i].split("=")
		if (splitValues[0] == nme) return splitValues[1]
	}
	return ""
}
function insertCounter() {
	readCookie()
	displayCounter()
}
function displayCounter() {
	var str = "You've visited this page ";
	if (counter == 1) str += "the first time.";
	else str += counter + " times.";
	document.getElementById('counter').innerHTML = str;
	document.getElementById('counter').style.color = "green";
}
function readCookie() {
	var cookie = document.cookie;
	counter = 0;
	var chkdCookie = delBlanks(cookie);
	var nvpair = chkdCookie.split(";");
	if (nameDefined(nvpair, "pageCount")) counter = parseInt(getCookieValue(nvpair, "pageCount"));
	++counter;
	var futdate = new Date();
	var expdate = futdate.getTime();
	expdate += 3600000 * 24 * 30;
	futdate.setTime(expdate);
	var newCookie = "pageCount=" + counter;
	newCookie += "; expires=" + futdate.toGMTString();
	document.cookie = newCookie;
}

function loggedIn() {
	if (window.location.href.indexOf("profile") != -1) {
		var elem = document.getElementById('bigmain');
		document.getElementById("linked").style.display = "inline";
		elem.innerHTML = "Profile";
		elem.href = "/show";		
	}
}
loggedIn();
insertCounter();