const express = require('express');
const request = require('request');

const routes = express.Router();

routes.use((req, res, next) => {
    request({
        uri: 'https://kitsu.io/api/edge/characters'
    }).pipe(res);
});

module.exports = routes;
