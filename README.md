nodejs-redis-push-notifications-demo
====================================

Node server that is able to read from a redis server and then stream those data via websocket to many client connected on the same page.



 Version:     1.0.4<br>
 Author:      Ashwani Singh<br>
 Contact:     ashwani4u4888@gmail.com<br>
 Twitter:     Ash_Singh4u<br>

 Copyright (c) Ashwani Singh

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

1. Redis Server installation 
    Debian
    sudo apt-get install redis-server
    
    running redis server:
    In terminal type redis-server


2. In the root of the project folder run
    npm install <br>
    above command will read package.js and install all dependencies (redis and socketio)
    
3. Start nodejs server <br>
   nodejs <root>/server.js
   
4. open  <root>/client/client.html in browser <br>

5. publish message to redis <br>
    (a).From nodejs publisher <br>
        nodejs /redis_publisher/nodejs/redis_pub.js <br>
        
    (b).From php publisher <br>
        navigate to /redis_publisher/php folder and run composer install <br>
        php redis_pub.js   <br>
        
    (C). From python publisher <br>
        python 3    <br>
        sudo pip3 install redis <br>
        python /redis_publisher/python/redis_pub_python3 <br

        python 2 <br>
        sudo pip install redis <br>
        python /redis_publisher/python/redis_pub_python2 <br>
        
