const app = require('express')();

const Log = require('../models/log.model');

app.route('/logs')
    .get(async (req, res) => {
        const queryObject = req.query;

        const foundLogs =  await Log.find(queryObject);
        console.log('foundLogs', foundLogs);
        return res.json(foundLogs);
    });

module.exports = app;