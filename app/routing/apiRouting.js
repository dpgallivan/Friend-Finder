var friends = require('../data/friends.js');
var path = require('path'); 

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
	app.post('/api/friends', function(req, res){
		var greatMatch = {
			name: '',
			image: '',
			matchDifference: 1000
		};
		var userData = req.body;
		var userName = userData.name;
		var userImage = userData.image;
		var userScore = userData.score;
		var totalDifference = 0;

		for(var i = 0; i < friends.length; i++){
			console.log(friends[i].name);
			totalDifference = 0;
				for(var mathSucks = 0; mathSucks < 10; mathSucks++){
					totalDifference += Math.abs(parseInt(userScore[mathSucks]) - parseInt(friends[i].scores));
					if(totalDifference <= greatMatch){
						greatMatch.name = friends[i].name;
						greatMatch.photo = friends[i].photo;
						greatMatch.matchDifference = totalDifference;
					}
				}
		}
		friends.push(userData);
		res.json(greatMatch);
	});
};