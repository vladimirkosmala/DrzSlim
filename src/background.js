/*
                                               .--.
                                               `.  \
                                                 \  \
                                                  .  \
                                                  :   .
                                                  |    .
                                                  |    :
                                                  |    |
  ..._  ___                                       |    |
 `."".`''''""--..___                              |    |
 ,-\  \             ""-...__         _____________/    |
 / ` " '                    `""""""""                  .
 \                                                      L
 (>                                                      \
/                                                         \
\_    ___..---.                                            L
  `--'         '.                                           \
                 .                                           \_
                _/`.                                           `.._
             .'     -.                                             `.
            /     __.-Y     /''''''-...___,...--------.._            |
           /   _."    |    /                ' .      \   '---..._    |
          /   /      /    /                _,. '    ,/           |   |
          \_,'     _.'   /              /''     _,-'            _|   |
                  '     /               `-----''               /     |
                  `...-'     dp                                `...-'
*/

function checkForValidUrl(tabId, changeInfo, tab) {
	try {
		console.log('url', tab.url);
		console.log('check', tab.url.indexOf('www.deezer.com') > -1);
		if (tab.url.indexOf('www.deezer.com') > -1) {
			console.log('good page, lets inject');
			chrome.pageAction.show(tabId);
			inject();
		}
	} catch(e) {
		console.log('error url tab');
	}
};
chrome.tabs.onUpdated.addListener(checkForValidUrl);


chrome.pageAction.onClicked.addListener(function(){alert('By VK');});

function inject() {
	chrome.tabs.executeScript(null, {file:"jquery.min.js"}, function() {
		chrome.tabs.executeScript(null, {
			file: 'script.js'
		}, null);
	});

	chrome.tabs.insertCSS(null, {
		file: 'style.css'
	}, null);
}