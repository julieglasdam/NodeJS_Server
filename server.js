var http = require('http');
var fs = require('fs');

// Set up server using http variable
var server = http.createServer(function(req, res){ // new function inside createServer function
   	res.setHeader('Access-Control-Allow-Origin', '*');
   	// First parameter is status code, second parameter is type of content
   	res.writeHead(200, {'Content-type' : 'text/json'}); 

  

  fs.readFileSync('small.txt', 'utf-8', function (err, data) {
    res.write('<h1>Heading</h1><p>Dis is text</p>');
    res.write(data);
   	// res.write('{"title" : "Hello JSON web API", "text" : "Text fra min API"}');
   	res.end();
  });

    
});

// Listen on port number
server.listen(process.env.PORT || 3003); // First parameter = heroku decides the port




