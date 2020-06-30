const sass = require('node-sass'),
      fs = require('fs'),
      path = require('path'),
      glob = require('glob');

const scssFiles = glob.sync('./components/**/**.scss', { ignore: './node_modules/**' });

scssFiles.map(file => {
  const output = path.parse(file).dir + '/styles.css'
  sass.render({
    file,
    sourceMap: output,
    outputStyle: 'compressed'
  }, (error, result) => {
    if (!error) {
      fs.writeFile(output, result.css, (err) => {
        if (err) console.error(err);
        else console.log('Compiled', file);
      });
    } else {
      console.error(error);
    }
  });
});
