#!/usr/bin/php
<?php

require 'vendor/autoload.php';

$client = new Predis\Client([
    'host'   => '127.0.0.1',
    'port'   => 6379,
]);

$userCount = array(
    'pmcount' => rand(5, 20),
    'secount' => rand(5, 10),
    'ssecount' => rand(10, 30),
    'tlcount' => rand(20, 40)
    
);
$channelName = 'redis_data';
$message = 'This is a test message from php redis publisher.';

//Publishing message to redis server
$client->publish($channelName, $message);
echo "published test message to channel [$channelName] ";

