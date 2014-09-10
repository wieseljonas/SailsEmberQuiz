import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SailsemberENV.locationType
});

Router.map(function() {
  this.route('testmodel');
  this.route('testrestrictedmodel');
  this.route('login');
  this.route('application');
  this.route('apirequests');
});

export default Router;
