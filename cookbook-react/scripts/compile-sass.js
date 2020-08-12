const { exec } = require('child_process');
const { spawn, spawnSync } = require('child_process');

const { error, success } = require('./utils');

exec("node ./node_modules/node-sass/bin/node-sass ../cookbook-web/recipes -o ../cookbook-web/recipes --output-style compressed", (e, stdout, stderr) => {
  success(stdout);
  
  if (stderr || e) {
    error(stderr || e);
    process.exit(1);
  }

  exec('git ls-files ../ --exclude-standard --others -m', (statusError, stdout2, stderr2) => {
    if (stderr || e) {
      error(stderr2 || e);
      process.exit(1);
    }

    if (stdout2) {
      error("There are some uncommited files. Please check if the following files should be commited:");
      error(stdout2);
      process.exit(1);
    }
  });
});
