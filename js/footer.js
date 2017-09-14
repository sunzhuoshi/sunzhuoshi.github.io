(function() {
	var footerText = 'sunzhuoshi \u00A9 2017';
	var footer = document.getElementById('footer');
	var div = document.createElement('DIV');
	div.style.textAlign = 'center';
	div.appendChild(document.createTextNode(footerText));
	footer.appendChild(div);
})();