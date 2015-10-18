
var vel = {
	in: {
		duration: 350,
		easing: [50,10]
	},
	out: {
		duration: 200,
		easing: [50,15]
	}
};
 	

$(document).ready(function() {
	var active = false;
	var first = true;
	var workItems = $('.work-item');
	var arrow = $('#down');
	
	var breakScroll = false;

	panels.connect();
	email.connect();

	$(window).scroll(function() {
		var distance = $(this).scrollTop();

		if(!breakScroll && distance > 500) {
			breakScroll = true;
			arrow.addClass('hidden');
		}
		else if(distance <= 500) {
			breakScroll = false;
			arrow.removeClass('hidden');
		}

	})

	$(document).on('click', '#work', function() {
		if(first) {
			first = false;
			panels.open(0);
		}
	});

	$(document).on('click', '#contactAnchor', function() {
		if(first) {
			first = false;
			$('#email').trigger('click');
		}
	});

	$(document).on('click', '#email', function(event) {
		event.preventDefault();
		first = false;

		if(!active) {
			active = !active;
			email.open();
		}
		else {
			active = !active;
			email.close();
		}
	});


	$(document).on('click', '.work-item', function() {
		var index = workItems.index($(this));
		first = false;

		if(panels.active == index) {
			panels.close(index);
			workItems.removeClass('active').removeClass('inactive');
		}
		else {
			workItems.addClass('inactive');
			
			$(this).removeClass('inactive').addClass('active')
			if(panels.active != -1) {
				panels.swap(index);
			}
			else {
				panels.open(index);
			}
		}
	});

	$(document).on('click', '#close', function(event) {
		event.preventDefault();
		
		var index = $(this).parents('.panel').index();
		workItems.removeClass('active').removeClass('inactive');

		panels.close(--index);
	});

	$(document).on('click', '#down', function(event) {
		event.preventDefault();

		var arrow = $(this);

		var position = $(arrow.attr('href')).position();


		$('html, body').animate({
			scrollTop: position.top
		}, {
			duration: vel.in.duration,
			complete: function() {
				workItems.first().trigger('click');
				arrow.css({ display: "none" });
			}
		});
	});

});

$(window).load(function() {
	var arrow = $('#down');

	arrow.velocity({
		opacity: 1,
		rotateZ: 360
	}, {
		duration: 1500,
		delay: 500, 
		easing: vel.in.easing,
		complete: function() {
			$(this).velocity({
				color: "#c0392b"
			}, {
				duration: vel.in.duration,
				complete: function() {
					$(this).velocity('reverse');
				}
			});
		}
	});
})