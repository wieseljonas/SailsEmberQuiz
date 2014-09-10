/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    baseURL: '/',
    environment: environment,
    locationType: 'auto',
    hostUrl: 'http://localhost:1337',
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. 'with-controller': true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // LOG_MODULE_RESOLVER is needed for pre-1.6.0
    //ENV.LOG_MODULE_RESOLVER = true;

    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    //ENV.APP.LOG_MODULE_RESOLVER = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    //ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV['simple-auth-oauth2'] = {
    //   serverTokenEndpoint: "http://localhost:1337/api/v1/login",
    //   serverTokenRevokationEndpoint: "http://localhost:1337/api/v1/logout",
    //   //serverTokenRequestEndpoint: "http://localhost:1337/api/v1/user/token"
    //   //refreshAccessTokens: true
    // };
    ENV['simple-auth'] = {
        authorizer: 'authorizer:token',
        crossOriginWhitelist: ['http://localhost:1337/']
    }
    ENV['simple-auth-token'] = {
        serverTokenEndpoint: 'http://localhost:1337/api/v1/login',
        //authorizationPrefix: 'JWT ',
        tokenPropertyName: 'token',
        authorizationHeaderName: 'access_token'
    }
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {

  }

  return ENV;
};