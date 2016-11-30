var mboxJSON = require('../mbox-json.js');

mboxJSON.parse('Chat.mbox', function(data){
	console.log(data);
});