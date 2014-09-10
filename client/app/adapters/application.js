import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   namespace: 'api/v1',
  //this is dependent on production/development environment 
  //It is configured in config/environment.js
  //host: SailsemberENV.hostUrl
  host: 'http://localhost:1337',
  // headers: function() {
  // 	console.log(this.container.lookup('simple-auth-session:main').get('access_token'));
  //   return {
  //     access_token : this.container.lookup('simple-auth-session:main').get('access_token')
  //   };
  // }.property("session.access_token")
});
