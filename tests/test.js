var mboxJSON = require('../mbox-json.js');

mboxJSON.parse(__dirname + '/Chat.mbox', function(data){
	console.log(data);
});