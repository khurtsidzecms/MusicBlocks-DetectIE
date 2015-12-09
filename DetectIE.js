var DetectIE = function() {
	var IE = ('ActiveXObject' in window && +(/\s(?:MSIE\s|rv\:)(\d+)/.exec(navigator.userAgent)[1])) || NaN;

	if(IE < 12) {
		document.body.innerHTML =  "<div style='margin: 200px;'>";
		document.body.innerHTML += "<h1 style='font-size: 100px; font-family: Arial; text-align: center; color: #F00;'>Music Blocks</h1>";
		document.body.innerHTML += "<h3 style='font-size: 40px; font-family: Arial; text-align: center;'>Music Blocks will not work in Internet Explorer, you can use:</h3>";
		document.body.innerHTML += "<div style='width: 550px; margin: 0 auto;'><a href='https://www.chromium.org/getting-involved/download-chromium' style='float: left; display: inherit; font-family: Arial; font-size: 30px; color: #0327F1; text-decoration: none;'>Chromium</a>";
		document.body.innerHTML += "<a href='https://www.google.com/chrome/' style='float: left; margin-left: 40px;display: inherit; font-family: Arial; font-size: 30px; color: #0327F1; text-decoration: none;'>Chrome</a>";
		document.body.innerHTML += "<a href='https://support.apple.com/downloads/safari' style='float: left; margin-left: 40px;display: inherit; font-family: Arial; font-size: 30px; color: #0327F1; text-decoration: none;'>Safari</a>";
		document.body.innerHTML += "<a href='https://www.mozilla.org/en-US/firefox/new/' style='float: left; margin-left: 40px;display: inherit; font-family: Arial; font-size: 30px; color: #0327F1; text-decoration: none;'>Firefox</a>";
		document.body.innerHTML += "</div></div>";
	}
}

DetectIE();