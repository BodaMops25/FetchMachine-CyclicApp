var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Cyclic testing!<br>');
    res.write('Testing env variables:<br>');
    res.write(process.env.TESTVAR);
    res.end();
}).listen(process.env.PORT || 3000);