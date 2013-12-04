var spammers = [];

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		spammers = xhr.responseText;
	}
};
xhr.open("GET",	"https://raw.github.com/VitaliyKulikov/spamkiller/master/spammers.json", true);
xhr.send();

document.addEventListener("DOMSubtreeModified", function(event) {

	var tweets = document.getElementsByClassName('tweet');

	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];
		var name = tweet.attributes['data-screen-name'].value;
		if (spammers.indexOf(name) != -1) {
			tweet.classList.add('spam_tweet');
		}
	}
});
