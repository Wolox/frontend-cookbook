import { get } from 'https';

const url = code =>
  `https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${
    process.env.REACT_APP_CLIENT_SECRET
  }&code=${code}`;

export default (req, res) => {
  get(url(req.query.code), response => {
    let data = '';
    response.on('data', chunk => (data += chunk));
    response.on('end', () => res.send(data));
  }).on('error', err => {
    // eslint-disable-next-line no-magic-numbers
    res.status(500).send({ message: err.message });
  });
};
