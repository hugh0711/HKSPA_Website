	$(function() {
		var ele = $('#scroll1');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUp1').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDown1').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUp1, .btnDown1').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});

	$(function() {
		var ele = $('#scroll2');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUp2').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDown2').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUp2, .btnDown2').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});

	$(function() {
		var ele = $('#scroll3');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUp3').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDown3').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUp3, .btnDown3').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});

	$(function() {
		var ele = $('#scroll4');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUp4').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDown4').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUp4, .btnDown4').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});

	$(function() {
		var ele = $('#scrollControlRemote');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUpControlRemote').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDownControlRemote').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUpControlRemote, .btnDownControlRemote').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});

	$(function() {
		var ele = $('#scrollControlConsole');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUpControlConsole').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDownControlConsole').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUpControlConsole, .btnDownControlConsole').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});
	
	$(function() {
		var ele = $('#scrollControl1');
		var speed = 50, scroll = 5, scrolling;

		$('.btnUpControl1').mouseenter(function() {
			// Scroll the element up
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() - scroll);
			}, speed);
		});

		$('.btnDownControl1').mouseenter(function() {
			// Scroll the element down
			scrolling = window.setInterval(function() {
				ele.scrollTop(ele.scrollTop() + scroll);
			}, speed);
		});

		$('.btnUpControl1, .btnDownControl1').bind({
			click: function(e) {
				// Prevent the default click action
				e.preventDefault();
			},
			mouseleave: function() {
				if (scrolling) {
					window.clearInterval(scrolling);
					scrolling = false;
				}
			}
		});
	});