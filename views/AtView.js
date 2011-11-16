define([
	'underscore',
	'backbone',
	'plugin/text!templates/at.tmpl'
], function(_, Backbone, atTemplate) {
	return Backbone.View.extend({
		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(atTemplate, {time: new Date()});
			$(this.el).html(template);

			return this;
		}
	});
});
