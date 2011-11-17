define([
	'underscore',
	'backbone',
	'plugin/text!templates/navigation.tmpl'
], function(_, Backbone, navigationTemplate) {
	return Backbone.View.extend({
		initialize: function() {
			_.bindAll(this);

			// Bind to routing events to highlight the active navigation entry
			this.options.router.bind('all', _.bind(function(event) {
				var routeMatch = event.match(/route:(.+)/);

				// If this was a route event:
				if (routeMatch != null) {
					var routeName = routeMatch[1];

					// Find URL of route
					$.each(this.options.router.routes, _.bind(function(url, name) {
						if (name == routeName) {
							this.setActiveEntry(url);

							return false; // break
						}
					}, this));
				}
			}, this));
		},

		// Register events for clicking on the buttons
		events: {
			"click a": "goto"
		},

		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(navigationTemplate, {});
			$(this.el).html(template);

			return this;
		},

		/*
		 * Change the active element in the topbar 
		 */
		setActiveEntry: function(url) {
			// Unmark all entries
			this.$('li').removeClass('active');

			// Mark active entry
			this.$("li a[href='" + url + "']").parents('li').addClass('active');
		},

		/*
		 * Prevent the default action and go to the page using Backbone.history
		 */
		goto: function(e) {
			e.preventDefault();

			var target = $(e.target).attr('href');

			Backbone.history.navigate(target, true);
		}
	});
});
