var http = require('http');
var socket = require('socket.io');
var redis = require('redis');

var appPort = 8011;
var redisPort = 6379;
var POLLING_INTERVAL = 3000;
var pollingTimer;
var redisClient = redis.createClient(redisPort, '127.0.0.1',{});
var connectionsArray = [];

var handler = function(request, response){
	console.log('Node.js Connection Server running');
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Connection Counter:'+connectionsArray.length);
    response.end();
};
app = http.createServer(handler);
io = socket.listen(app);
app.listen(appPort);

// redisMessages 
var redisMessages = function() { 
    dashletData = new Array();
    var socketChannelName = '';
    redisClient.on('message', function(channel, message){
        console.log("client channel " + channel + ": " + message);
        // loop on itself only if there are sockets still connected
        if (connectionsArray.length) {
            if (channel == 'redis_data') {
                socketChannelName = 'redisData';
            }
           
            updateSockets({redis: message}, socketChannelName);
        } 
            
    });
    if (connectionsArray.length) {
        pollingTimer = setTimeout(redisMessages, POLLING_INTERVAL);
    } else {
      console.log('no data from redis server')
    }
   
};


// creating a new websocket to keep the content updated without any AJAX request
io.sockets.on('connection', function(socket) {
  console.log('Number of connections:' + connectionsArray.length);
  // starting the loop only if at least there is one user connected
if (!connectionsArray.length) { 
    redisClient.subscribe("redis_data");
    redisMessages(); // for sending redis messages as push notification
}

socket.on('disconnect', function() {
    var socketIndex = connectionsArray.indexOf(socket);
    console.log('socketID = %s got disconnected', socketIndex);
    if (~socketIndex) {
      connectionsArray.splice(socketIndex, 1);
    }
    updateSockets({},'connection_counter');
});

    console.log('A new socket is connected!');
    connectionsArray.push(socket);

});

var updateSockets = function(data, notificationType) {
 
    // adding the time of the last update
    data.time = new Date();
    data.connectionCounter = connectionsArray.length;
    console.log('Pushing new data to the clients connected ( connections amount = %s ) - %s', connectionsArray.length , data.time);
    
    notificationType = typeof notificationType !== 'undefined' ? notificationType : '';
    
    // sending new data to all the sockets connected
    connectionsArray.forEach(function(tmpSocket) {
        
        if (notificationType !== '') {		  
              tmpSocket.volatile.emit(notificationType, data);
        } else {
              tmpSocket.volatile.emit('notification', data);
        }	  
	});
};

console.log('Nodejs server running at http://localhost:'+appPort);
