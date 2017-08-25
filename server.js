var http = require('http');

// Set up server using http variable
var server = http.createServer(function(req, res){ // new function inside createServer function
   	// First parameter is status code, second parameter is type of content
   	res.writeHead(200, {'Content-type' : 'text/json'}); 
   	// res.write('<h1>Heading</h1><p>Dis is text</p>');
   	res.write('{"title" : "Hello JSON web API", "text" : "Text fra min API"}');
   	res.end();
});

// Listen on port number
server.listen(3003);
