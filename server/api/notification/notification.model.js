'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NotificationSchema = new Schema({
		email: String,
		company: String,
		date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', NotificationSchema);