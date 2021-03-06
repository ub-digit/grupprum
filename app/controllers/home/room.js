import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application', 'home'],
	isExpandedId: null,


	getSelectedLibraryName: function() {
		return this.get("controllers.application").get("librariesSorted").findBy("id", this.get('model.location_id').toString()).display_title;
	}.property('controllers.application.librariesSorted', 'model.location_id'),


	getDate: function() {
		var t = this.container.lookup('utils:t');
		var tempDate = this.get("model.bookings.firstObject.pass_day");
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		var date =	moment(tempDate);
		var dateStr = date.locale(local).format(t('filter.dateStrings.dateFormatString'));
		return dateStr;
	}.property('model.bookings'),

	actions: {
		closeAllOpen: function() {
			this.get("model.bookings").forEach(function(item) {
				item.set('isExpanded', false);
			});
		},
	}
});
