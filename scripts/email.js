var email = (function() {
	var email = {};
	var emailForm;

	email.connect = function() {
		emailForm = $('#emailForm');
		email = $('#email');
	}


	email.close = function() {

		email.removeClass('danger').removeClass('large');
		email.text('Email');
		email.velocity({ rotateZ: 0 }, { duration: 0 })

		emailForm.velocity({
			height: 0
		}, {
			duration: vel.out.duration,
			easing: vel.out.easing
		});
	}

	email.open = function() {
		var height;
			email.html('&times;');
			email.addClass('danger').addClass('large');

			email.velocity({
				rotateZ: 180
			}, {
				duration: 750,
				easing: [50, 10.5]
			})
			emailForm.css({ height: '100%' });
			height = emailForm.height();

			emailForm.css({ height: 0 })

			emailForm.velocity({
				height: height
			}, {
				duration: vel.in.duration,
				easing: vel.in.easing,
				complete: function() {
					// emailForm.find('.contact-input').first().focus();
				}
			});
	}

	return email;
})();