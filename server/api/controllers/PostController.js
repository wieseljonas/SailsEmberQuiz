/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	restricted: function (req, res) {
		return res.ok("This is restricted");
	},
	open: function (req, res){
		return res.ok("This is open");
	},
	jwt: function (req, res){
		return res.ok("This requires a JWT");
	},
};

