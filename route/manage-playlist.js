'use strict';

const router = require('express').Router();
var request = require('request');

router.post('/create', (req, res) => {

});

router.get('/getPlaylist', (req, res) => {

  request({
    url: 'https://api.spotify.com/v1/users/1216797299/playlists/12D1JAQakvKog8BoCpDFw6?market=ES',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + 'BQACZ0zvx3HWkL9ykvbxhoe9zKf8BzZkAsj0o6Qklr1JxqP-3XmAcnH_iw0IIiRhQrV0W5Y1my28ZRBn8OrmRtaZ7mvfrpL7Y64qQ9uTZbuWrnLyRq0iteVr9SbwYkBJd0mGRFdHpSTaeg'
    }
  }, function(error, response, body){
    if(error) {
      console.log(error);
    } else {
      console.log(response.statusCode, body);
      res.send(body);
    }
  });

});

module.exports = router;
