import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		Ember.$("#ember-app-bubba-cli").addClass("loading");
	},
	afterModel: function() {
		Ember.$("#ember-app-bubba-cli").removeClass("loading");
	},
	setupController: function(controller) {
		if (sessionStorage.getItem("librarycardNumber")) {
			controller.set("librarycardNumber", sessionStorage.getItem("librarycardNumber"));
		}
		if (sessionStorage.getItem("personalSecurityNumber")) {
			controller.set("personalSecurityNumber", sessionStorage.getItem("personalSecurityNumber"));
		}
	}
});
