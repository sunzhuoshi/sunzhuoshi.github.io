(function() {
	// add game here
	var OnlineGameList = [
		{
			name: 'flappybird-ql',
			desc: 'Flappy Bird AI based on Q learning.',
			url: 'https://enhuiz.github.io/flappybird-ql/'
		},
		{
			name: '2048 AI by ovolve',
			desc: '2048 AI based on Minimax and alpha-beta pruning(it works, but it SHOULD NOT be a good solution).',
			url: 'https://github.com/ovolve/2048-AI'
		},
		{
			name: '2048 AI by ronzil',
			desc: '2048 AI based on Pure Montre Carlo, interesting and helpful.',
			url: 'http://ronzil.github.io/2048-AI/'
		},
		{
			name: '2048 AI by sunzhuoshi',
			desc: '2048 AI based on Expectimax, Pure Monte Carlo and Q learning(coming soon).',
			url: 'https://sunzhuoshi.github.io/2048/ai.html'
		}			
	];
	var OfflineGameList = [
		{
			name: '2048 AI by nneonneo',
			desc: 'C++ 2048 AI based on Expectimax and browser remote control. It is highly optimized, and can achieve 32768 sometimes. A very good example.',
			url: 'https://github.com/nneonneo/2048-ai'
		}
	];
	function CreateSimpleElement(name, text, className) {
		var element = document.createElement(name);
		if (text) {
			element.appendChild(document.createTextNode(text));			
		}
		if (className) {
			element.className = className;
		}
		return element;
	}
	function FillGameContainer(container, gameList) {
		for (var i=0; i<gameList.length; ++i) {
			var gameInfo = gameList[i];
			container.appendChild(CreateSimpleElement('DIV', gameInfo.name, 'h2'));
			container.appendChild(CreateSimpleElement('P', gameInfo.desc));
			var aElement = CreateSimpleElement('A', gameInfo.url);
			aElement.href = gameInfo.url;
			aElement.target = '_blank';
			var pElement = CreateSimpleElement('P');
			pElement.appendChild(aElement);
			container.appendChild(pElement);				
		}
	}	
	FillGameContainer(document.getElementById('online-container'), OnlineGameList);
	FillGameContainer(document.getElementById('offline-container'), OfflineGameList);
})();
