const https = require('https');

const url = code =>
  `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`;

module.exports = (req, res) => {
  https.get(url(req.query.code), response => {
    let data = '';
    response.on('data', chunk => { data += chunk; });

    response.on('end', () => { res.send(data); });
  }).on('error', err => {
    res.status(500).send({ message: err.message });
  });
}
