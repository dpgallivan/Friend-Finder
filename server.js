var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
// var jsonParser = bodyParser.json()
// var urlcodeParser = bodyParser.urlencoded({extended: false}) 		

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(bodyParser.json({type: 'application/*+json' })),

// app.use(bodyParser.raw({type: 'application/vnd.custom-type' })),

// app.use(bodyParser.text({type: 'text/html' })),

require('../friend_finder/app/routing/htmlRoutes.js')(app);
require('../friend_finder/app/routing/apiRouting.js')(app);

app.listen(PORT, function(){
	console.log('App listening on PORT: ' + PORT);
});

