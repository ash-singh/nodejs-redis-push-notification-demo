var serverPort = 8011;
// create a new websocket
var socket = io.connect('http://localhost:'+serverPort);
console.log("socket connect");
console.log(socket);

// Updating connection counter
// on message received we print all the data inside the #container div

socket.on('redisData', function (data) {
    console.log(data);
    var message = data.redis;
    /*userData.forEach(function(item) { 
        $('#dashlet_'+item.user_type).html(item.user_count);
    });*/
    $('#redis_message').html(message);
    
    $('#msg_time').html('Received on:' + data.time);
});
