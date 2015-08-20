/*
 Redis publisher
*/
var redis = require('redis');

var redisPort = 6379;

var channelName = 'redis_data';

var message = 'This is a test message from nodejs redis publisher.'

var redisPublisher = redis.createClient(redisPort, '127.0.0.1',{});

redisPublisher.publish(channelName, message);

console.log('published test message to channel ['+channelName+'] ');
redisPublisher.quit();