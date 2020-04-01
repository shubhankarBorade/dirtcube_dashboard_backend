const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: null
    },
    ipAddress: {
        type: String,
        default: null
    },
    errorStack: {
        type: String,
        default: null
    },
    route: {
        type: String,
        default: null
    },
    method: {
        type: String,
        default: null
    },
    requestPayload: {
        type: Object,
        default: null
    },
    requestParam: {
        type: Object,
        default: null
    },
    requestHeader: {
        type: Object,
        default: null
    },
    responseCode: {
        type: Number,
        default: null
    },
    responsePayload: {
        type: Object,
        default: null
    }
});

module.exports = mongoose.model('logs', logSchema);
