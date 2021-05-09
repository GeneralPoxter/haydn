// Code credit to https://stackoverflow.com/a/49669158/14218946

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
const NUM_VIDEOS = 110;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '600',
		width: '1000',
		events: {
			onReady: onPlayerReady
		},
		playerVars: {
			listType: 'playlist',
			list: 'PLIYNfzJL0TSd98L5W7mCZp4RcFZK7Jda3'
		}
	});
}

function onPlayerReady() {
	num = Math.floor(Math.random() * NUM_VIDEOS);
	player.playVideoAt(num);
}
