var mqtt = require('mqtt');
var flag = true;
var client  = mqtt.connect('mqtt://192.168.3.11');client.on('connect', function () {setInterval(function() {

client.publish('/f/outTopic', (flag)? '1024' : '0');
flag = !flag;

console.log('Message Sent');
}, 5000);});
