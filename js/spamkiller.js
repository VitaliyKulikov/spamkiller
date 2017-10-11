var spammers = [];

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		spammers = xhr.responseText;
	}
};
xhr.open("GET",	"https://raw.github.com/VitaliyKulikov/spamkiller/master/spammers.json", true);
xhr.send();

var spammerName = "Enter Spammer Name";

function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "spammerName");
    hiddenField.setAttribute("value", params[0]);

    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}

function reportSpammer () {
	alert ("report spammer called");
	var spammerId = document.getElementById ('spammerid').value;
	var params = [spammerId];
	post_to_url("http://twitmaidanid.appspot.com/report", params);
	document.getElementById ('spammerid').value = "reported";
}

var rSpammerHTML = "<div class='module site-footer'><div class='flex-module'><div class='flex-module-inner js-items-container'><ul class='clearfix'><li>" + spammerName + "</li><input id='spammerid'></input><div style='padding: 5px 0px'><li><input id='spammerButton' type='button' class='btn' value='Submit'></li></ul></div></div></div>";

function paintSpammerForm () {
	var el = document.getElementsByClassName ('dashboard') [0];
	alert (el.innerHTML);
	el.innerHTML += rSpammerHTML;
	var button = document.getElementById ('spammerButton');
	button.onclick = reportSpammer;
};

document.addEventListener("DOMSubtreeModified", function(event) {

	var tweets = document.getElementsByClassName('tweet');

	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];
		var name = tweet.attributes['data-screen-name'].value;
		if (spammers.indexOf(name) != -1) {
			tweet.classList.add('spam_tweet_hide');
		}
	}
});
window.onload = paintSpammerForm;
