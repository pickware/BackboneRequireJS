define([
	'underscore',
	'backbone',
	'plugin/text!templates/lorem.tmpl'
], function(_, Backbone, loremTemplate) {
	return Backbone.View.extend({
		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(loremTemplate, {time: new Date()});
			$(this.el).html(template);

			return this;
		}
	});
});
