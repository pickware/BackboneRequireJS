define(['plugin/text!templates/lorem.tmpl'], function(loremTemplate) {
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
