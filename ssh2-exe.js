c.on('ready', function() {
  c.exec('ls -lah', function(err, stream) {
    if (err) throw err;
    stream.on('data', function(data) {
      console.log('STDOUT: ' + data);      
    }).stderr.on('data', function(data){
      console.log('STDERR: ' + data);      
    }).on('exit', function(code, signal) {
      console.log('Exited with code ' + code + ' and signal: ' + signal);
    });
  });
});
