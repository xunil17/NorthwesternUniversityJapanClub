var fb = new Firebase('https://nu-japan-club.firebaseio.com');
var cms = fb.child('cms');
var exec = fb.child('exec');

// Write copy.

$('span.fb-value').each(function () {
	var $el = $(this);
	var key = $el.attr('data-key');
	if (key) {
		cms.child(key).on('value', function (snapshot) {
			$el.text(snapshot.val());
		});
	}
});

// Exec info.

exec.on('value', function (snapshot) {
	var data = snapshot.val();
	var i = 0;
	while (true) {
		var datum = data[i];
		if (!datum) {
			break;
		}
		$(
			'<div class="col-xs-12 col-md-6 exec">' +
				'<h3>' + datum.name + ' - ' + datum.position + '</h1>' +
				'<img src="doesnotexist.png"/>' +
				'<p>' + datum.bio + '</p>' +
			'</div>'
		).appendTo('#exec-container');
		i++;
	}
});
