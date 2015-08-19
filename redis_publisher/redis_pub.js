/*
 Redis publisher
*/
var redis = require('redis');
var redisPort = 6379;
var channelName = 'redis_data';

var redisPublisher = redis.createClient(redisPort, '127.0.0.1',{});

redisPublisher.publish(channelName, "This is a test message from redis.");

console.log('published test message to channel ['+channelName+'] ');
redisPublisher.quit();