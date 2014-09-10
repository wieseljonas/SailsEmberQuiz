import Ember from 'ember';

export default Ember.Route.extend({
  	model: function(){
  		console.log(this.store.find('testmodel'));
  		console.log(this.store.find('testrestrictedmodel'));
    return Ember.Object.create({testrestrictedmodels: this.store.find('testrestrictedmodel'), testmodels: this.store.find('testmodel')});
  	}
});
