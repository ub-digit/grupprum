import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		Ember.$("#ember-app-bubba-cli").addClass("loading");
	},
	afterModel: function() {
		Ember.$("#ember-app-bubba-cli").removeClass("loading");
	},
	model: function() {
		// get list of libraries
		return this.store.find('location');	
	},

	generateDates: function() {
		var dates = []; 

		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		for (var i = 0; i < 7; i++) {
			 var date = moment().add(i, 'days');
			 var dateStr = date.locale(local).format("dddd, Do MMM");
			 var t = this.container.lookup('utils:t');
			 if (i === 0) {
			 	dateStr = t('filter.dateStrings.today');
			 }
			 else if (i === 1) {
			 	dateStr = t('filter.dateStrings.tomorrow');
			 }
			 dates.push({'id': i.toString(), 'title': dateStr});
		}
		return dates;
	},

	setupController: function(controller, model) {
		controller.set("libraries", model);
		controller.set("dates", this.generateDates());
	}
});
