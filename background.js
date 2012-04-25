function rdify() {
	rdiosearch = 'http://www.rdio.com/search/';
	url = window.location.href;
	if(url.indexOf('track') > -1 || url.indexOf('album') > -1) {
		target = document.getElementById('title').innerText;
		window.location.href = rdiosearch + encodeURIComponent(target);
	}
}

rdify();

// album: http://open.spotify.com/album/3hVR63Y2ElBoxmzThy80nG
// track: http://open.spotify.com/track/5MuWU8UkuUpmQMVgLqkEIb