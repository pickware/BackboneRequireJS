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
	'js/ApplicationRouter',
	'views/NavigationView',
	'plugin/css!http://twitter.github.com/bootstrap/1.4.0/bootstrap.min',
	'plugin/css!css/style'
], function($, Backbone, ApplicationRouter, NavigationView) {
	var router = new ApplicationRouter($('#content'));

	var navigationView = new NavigationView({
		el: $('div.nav')[0],
		router: router
	}).render();

   	Backbone.history.start();
});