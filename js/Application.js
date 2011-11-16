require.config({
	baseUrl: './',
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.7.0.min',
		'underscore': 'http://documentcloud.github.com/underscore/underscore-min',
		'plugin/css': 'https://raw.github.com/VIISON/RequireCSS/master/css',
		'plugin/text':	'http://requirejs.org/docs/release/1.0.1/minified/text'
	}
});

require([
	'jquery',
	'underscore',
	'plugin/css!http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css',
	'plugin/css!css/style'
	], function($, _) {

		// Assign underscore global
		window._ = _;
		
		require(['http://documentcloud.github.com/backbone/backbone-min.js'], function() {
			// Override View.remove()'s default behavior
			Backbone.View = Backbone.View.extend({
				remove: function() {
					// Empty the element and remove it from the DOM while preserving events
					$(this.el).empty().detach();
			
					return this;
				}
			});

			require(['js/ApplicationRouter'], function(ApplicationRouter) {				
				var router = new ApplicationRouter($('#content'));
		    	Backbone.history.start();
			});
		});
	}
);