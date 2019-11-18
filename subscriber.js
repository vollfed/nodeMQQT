var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.3.11')

client.on('connect', function () {
    client.subscribe('/f/outTopic')
});
	
client.on('message', function (topic, message) {
	context = message.toString();
    console.log(context)
});
