var fb = new Firebase('https://nu-japan-club.firebaseio.com');
var cms = fb.child('cms');
var exec = fb.child('exec');
var buzzwords = fb.child('buzzwords');
var banner = fb.child('banner');

// Write copy.

$('span.fb-value').each(function () {
	var $el = $(this);
	var key = $el.attr('data-key');
	if (key) {
		cms.child(key).on('value', function (snapshot) {
			$el.html(snapshot.val());
		});
	}
});

// Exec info.

exec.on('value', function (snapshot) {
	var data = snapshot.val();
	var i = 0;
	while (true) {
		var datum;
		var $row = $('<div class="row"></div>').appendTo('#exec-container');

		datum = data[i];
		if (!datum) { 
			break;
		}
		$(
			'<div class="col-xs-12 col-md-6 exec">' +
				'<h3>' + datum.name + ' - ' + datum.position + '</h3>' +
				'<h4>' + datum.email + '</h4>' +
				'<img src="' + datum.picture + '"/>' +
				'<p>' + datum.bio + '</p>' +
			'</div>'
		).appendTo($row);
		i++;

		datum = data[i];
		if (!datum) { 
			break;
		}
		$(
			'<div class="col-xs-12 col-md-6 exec">' +
				'<h3>' + datum.name + ' - ' + datum.position + '</h3>' +
				'<h4>' + datum.email + '</h4>' +
				'<img src="' + datum.picture + '"/>' +
				'<p>' + datum.bio + '</p>' +
			'</div>'
		).appendTo($row);
		i++;
	}
});

buzzwords.on('value', function (snapshot) {
	var data = snapshot.val();
	var i = 0;
	while (true) {
		var datum = data[i];
		if (!datum) {
			break;
		}
		$('<td>' + datum + '</td>').appendTo('#buzzwords tr');
		i++;
	}
});

banner.on('value', function (snapshot) {
	var data = snapshot.val();
	if (data.link && data.link.length) {
		$('<a href="' + data.link + '"><img src="' + data.picture + '" id="banner"/></a>').appendTo('#banner-container');
	} else {
		$('<img src="' + data.picture + '" id="banner"/>').appendTo('#banner-container');
	}
});
