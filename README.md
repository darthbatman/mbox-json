# mbox-json
Parses MBOX file to JSON

Mail Labels (e.g. Time, From, Received, etc.) become attributes.

[![https://nodei.co/npm/mbox-json.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/mbox-json.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/mbox-json)

[![Build Status](https://travis-ci.org/darthbatman/mbox-json.svg?branch=master)](https://travis-ci.org/darthbatman/mbox-json)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/darthbatman/mbox-json)


# install

```
npm install mbox-json
```

# example

```js
var mboxJSON = require('mbox-json');

mboxJSON.parse(__dirname + '/Chat.mbox', function(data){
	console.log(data); // prints array of messages
	console.log(data[0]); // prints first message
	console.log(data[0].Time); // prints timestamp of when first message was sent
	console.log(data[0].From); // prints sender of first message
	console.log(data[0]['Content-Type']); // prints content type of first message
	console.log(data[0].Message); // prints message content of first message
});

```

# api

### parse(callback)

Type: `function`

Calls back with object containing array of messages.

### data

Type: `array`

Message objects.

### messageObject['Time']

Type: `string`

Time that message was sent.

### messageObject['From']

Type: `string`

Sender of message.

### messageObject['Content-Type']

Type: `string`

Content Type of message.

### messageObject['Message']

Type: `string`

Content of message.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)