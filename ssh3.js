var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', function() {
  conn.exec('touch /home/wb/IGotHere;ssh -t -t wb@192.168.199.147', function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      stream.write("199139wb\r");
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });  
}).connect({
  host: '192.168.199.134',
  port: 22,
  username: 'wb',
  password: '199139wb'
});

// example output:
// Client :: ready
// Listening for connections on server on port 8000!
//  (.... then from another terminal on the server: `curl -I http://127.0.0.1:8000`)
// TCP :: INCOMING CONNECTION: { destIP: '127.0.0.1',
//  destPort: 8000,
//  srcIP: '127.0.0.1',
//  srcPort: 41969 }
// TCP DATA: HEAD / HTTP/1.1
// User-Agent: curl/7.27.0
// Host: 127.0.0.1:8000
// Accept: */*
//
//
// TCP :: CLOSED
