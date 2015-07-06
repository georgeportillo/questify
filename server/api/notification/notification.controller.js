'use strict';

var _ = require('lodash');
var Notification = require('./notification.model');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('qhyw-mpX5GWb97NEDH_OZw');

// Get list of notifications
exports.index = function(req, res) {
  Notification.find(function (err, notifications) {
    if(err) { return handleError(res, err); }
    return res.json(200, notifications);
  });
};

exports.getNotified = function(req, res) {
  var recipient = [];

  var user_information = {
    email: req.body.email,
		company: req.body.company
  }

  recipient.push(user_information);

  Notification.create(user_information, function(err, notification) {
    if(err) { return handleError(res, err); }
    return res.json(201, notification);
  
		var message = {
				"subject": 'Thank you for signing up',
				"text": 'Hello, thank you for signing up for Questify. We will notify you when it is ready to be used.',
				"from_email": 'rabidracoon@questify.io',
				"from_name": 'The Rabid Racoon',
				"to": recipient, 
				"headers": {
						"Reply-To": 'noreply@questify.io'
				},
				"metadata": {
						"website": "www.questify.io"
				}
		};

		mandrill_client.messages.send({
				"message": message
		}, function(result) {
			return res.json(201, result);
		}, function(e) {
			return res.send(e);
		});
	
	
	
	});
}


// Get a single notification
exports.show = function(req, res) {
  Notification.findById(req.params.id, function (err, notification) {
    if(err) { return handleError(res, err); }
    if(!notification) { return res.send(404); }
    return res.json(notification);
  });
};

// Creates a new notification in the DB.
exports.create = function(req, res) {
  Notification.create(req.body, function(err, notification) {
    if(err) { return handleError(res, err); }
    return res.json(201, notification);
  });
};

// Updates an existing notification in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Notification.findById(req.params.id, function (err, notification) {
    if (err) { return handleError(res, err); }
    if(!notification) { return res.send(404); }
    var updated = _.merge(notification, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, notification);
    });
  });
};

// Deletes a notification from the DB.
exports.destroy = function(req, res) {
  Notification.findById(req.params.id, function (err, notification) {
    if(err) { return handleError(res, err); }
    if(!notification) { return res.send(404); }
    notification.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}