c.on('ready', function() {
  c.exec('ls -lah', function(err, stream) {
    if (err) throw err;
    stream.on('data', function(data, stderr) {
      if (stderr)
        console.log('STDERR: ' + data);
      else
        console.log('STDOUT: ' + data);
    }).on('exit', function(code, signal) {
      console.log('Exited with code ' + code);
    });
  });
});
