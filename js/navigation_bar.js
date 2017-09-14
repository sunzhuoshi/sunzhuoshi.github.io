(function() {
	var items = [
		{
			label: 'Home',
			url: 'index.html'
		},
		{
			label: 'Game AI',
			url: 'game-ai.html'
		},
		{
			label: 'About',
			url: 'about.html'
		}
	];
	var navElement = document.createElement('NAV');
	var ulElement = document.createElement('UL');
	for (var i=0; i<items.length; ++i) {
		var item = items[i];
		var liElement = document.createElement('LI');
		var aElement = document.createElement('A');
		aElement.href = item.url;
		aElement.appendChild(document.createTextNode(item.label));
		liElement.appendChild(aElement);
		ulElement.appendChild(liElement);		
	}	
	navElement.appendChild(ulElement);
	document.getElementById('navigation_bar').appendChild(navElement);
})();
