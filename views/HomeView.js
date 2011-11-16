define(['plugin/text!templates/home.tmpl'], function(homeTemplate) {
	return Backbone.View.extend({
		// Register events for clicking on the buttons
		events: {
			'click a[name=lorem]': 'goto',
			'click a[name=at]': 'goto',
			'click a[name=duis]': 'goto'
		},

		/*
		 * Prevent the default action and go to the page using Backbone.history
		 */
		goto: function(e) {
			e.preventDefault();

			var target = $(e.target).attr('href');
			if (target) {
				Backbone.history.navigate(target, true);
			}
		},

		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(homeTemplate, {});
			$(this.el).html(template);

			return this;
		}
	});
});
