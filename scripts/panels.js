var panels = (function() {
	

	var panels = {};
	var panelsArray = [];
	panels.active = -1;

	
	panels.connect = function() {
		$('.panel').each(function() {
			panelsArray.push(this);
		});
	}

	panels.get = function(index) {
		return $(panelsArray[index]);
	}

	panels.open = function(index) {
		var panel = $(panelsArray[index]);

		panel.css({ height: '100%' });
		height = panel.outerHeight();
		panel.css({ height: 0 });

		setTimeout(function() { panels.active = index }, 0);

		panel.velocity({
			height: height,
		}, {
			duration: vel.in.duration,
			easing: vel.in.easing,
			complete: function() {
				panel.css({height: 'auto'});
			}
		});
	}

	panels.swap = function(index) {
		var activePanel = $(panelsArray[panels.active]);
		var newPanel = $(panelsArray[index]);

		activePanel.css({
			height: 0
		})

		newPanel.css({
			height: 'auto'
		})

		panels.active = index;;


	}

	panels.close = function(index, callback) {
		var panel = $(panelsArray[index]);
		panels.active = -1;

		panel.velocity({
			height: 0
		}, {
			duration: vel.out.duration,
			easing: vel.out.easing,
			complete: function() {
				if(callback) callback();
			}
		});
	}

	return panels;
})();