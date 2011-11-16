require.config({
	baseUrl: './',
	paths: {
		'jquery': 'http://code.jquery.com/jquery-1.7.0.min',
		'underscore': 'http://documentcloud.github.com/underscore/underscore-min',
		'backbone': 'https://raw.github.com/jrburke/backbone/optamd3/backbone',
		'plugin/css': 'https://raw.github.com/VIISON/RequireCSS/master/css',
		'plugin/text':	'http://requirejs.org/docs/release/1.0.1/minified/text'
	}
});

require([
	'jquery',
	'backbone',
	'views/NavView',
	'plugin/css!http://twitter.github.com/bootstrap/1.4.0/bootstrap.min',
	'plugin/css!css/style'
	], function($, Backbone, NavView) {
		// Override View.remove()'s default behavior
		Backbone.View = Backbone.View.extend({
			remove: function() {
				// Empty the element and remove it from the DOM while preserving events
				$(this.el).empty().detach();

				return this;
			}
		});

		require(['backbone', 'js/ApplicationRouter'], function(Backbone, ApplicationRouter) {
			var router = new ApplicationRouter($('#content'));

			var navView = new NavView({
				el: $('div.nav')[0],
				router: router
			}).render();

	    	Backbone.history.start();
		});
	}
);