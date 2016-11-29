var fs = require('fs');
var mbox = fs.readFileSync('Chat.mbox','utf8');
// messages messed up; part of message becomes key for attribute in object
// e.g. 'could you do this' becomes { could: 'you do this' }
var parse = function(mbox, cb){
	var messages = [];
	var currentMessage = {};
	var blankCount = 0;
	for (var i = 0; i < mbox.split("\r\n").length; i++){
		if (blankCount == 2){
			blankCount = 0;
			messages.push(currentMessage);
			currentMessage = {};
		}
		if (mbox.split("\r\n")[i] != ''){
			if (Object.keys(currentMessage).length == 0){
				currentMessage.Time = mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).substring(mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).indexOf(' ') + 1);
			}
			else if (mbox.split("\r\n")[i].substring(0, mbox.split("\r\n")[i].indexOf(' ')).replace(":", "").length == 0) {
				currentMessage.Message = mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1);
			}
			else if (mbox.split("\r\n")[i].substring(0, mbox.split("\r\n")[i].indexOf(' ')).replace(":", "") == 'X-Received' || mbox.split("\r\n")[i].substring(0, mbox.split("\r\n")[i].indexOf(' ')).replace(":", "") == 'Received') {
				currentMessage[mbox.split("\r\n")[i].substring(0, mbox.split("\r\n")[i].indexOf(' ')).replace(":", "")] = {
					'IP Address': mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).substring(mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).indexOf('by ') + 3).split(' with ')[0],
					'SMTP ID': mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).substring(mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).indexOf('by ') + 3).split('SMTP id ')[1].split('; ')[0],
					'Time': mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).substring(mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1).indexOf('by ') + 3).split('SMTP id ')[1].split('; ')[1].trim()
				};
			}
			else {
				currentMessage[mbox.split("\r\n")[i].substring(0, mbox.split("\r\n")[i].indexOf(' ')).replace(":", "")] = mbox.split("\r\n")[i].substring(mbox.split("\r\n")[i].indexOf(' ') + 1);
			}
		}
		else {
			blankCount++;
		}
	}
	console.log(messages);
};

parse(mbox, function(data){

});