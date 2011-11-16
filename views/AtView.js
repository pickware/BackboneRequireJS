define(['plugin/text!templates/at.tmpl'], function(atTemplate) {
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
