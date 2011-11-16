define([
	'backbone',
	'views/HomeView',
	'views/AtView',
	'views/DuisView',
	'views/LoremView',
	'views/NotFoundView'
], function(Backbone, HomeView, AtView, DuisView, LoremView, NotFoundView) {
	return Backbone.Router.extend({
		initialize: function(el) {
			this.el = el;

			this.homeView = new HomeView();
			this.loremView = new LoremView();
			this.atView = new AtView();
			this.duisView = new DuisView();
			this.notFoundView = new NotFoundView();
		},

		routes: {
			"": "home",
			"lorem": "lorem",
			"at": "at",
			"duis": "duis",
			"*else": "notFound"
		},

		currentView: null,

		switchView: function(view) {
			if (this.currentView) {
				// Detach the old view
				this.currentView.remove();
			}

			// Move the view element into the DOM (replacing the old content)
			this.el.html(view.el);

			// Render view after it is in the DOM (styles are applied)
			view.render();

			this.currentView = view;
		},

		/*
		 * Change the active element in the topbar 
		 */
		setActiveEntry: function(url) {
			// Unmark all entries
			$('li').removeClass('active');

			if (url) {
				// Mark active entry
				$("li a[href='" + url + "']").parents('li').addClass('active');					
			}
		},

		home: function() {
			this.switchView(this.homeView);
			this.setActiveEntry(null);
		},

		lorem: function() {
			this.switchView(this.loremView);
			this.setActiveEntry('#lorem');
		},

		at: function() {
			this.switchView(this.atView);
			this.setActiveEntry('#at');
		},

		duis: function() {
			this.switchView(this.duisView);
			this.setActiveEntry('#duis');
		},

		notFound: function() {
			this.switchView(this.notFoundView);
		}
	});
});