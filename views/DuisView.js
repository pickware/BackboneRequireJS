define(['plugin/text!templates/duis.tmpl'], function(duisTemplate) {
	return Backbone.View.extend({
		/*
		 * Render the template content into a new div-element
		 */
		render: function() {
			var template = _.template(duisTemplate, {time: new Date()});
			$(this.el).html(template);

			return this;
		}
	});
});
