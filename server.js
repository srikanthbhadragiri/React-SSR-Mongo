import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';

import config from './config';
import apiRouter from './api';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/policy/:policyId'], (req, res) => {
  // console.log(req.params.policyId); // use for conditional logic
  serverRender(req.params.policyId)
    .then(({ initialMarkUp, initialData }) => {
      res.render('index', {
        initialMarkUp,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on PORT ', config.port)
});
