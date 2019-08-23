const mongoose = require('mongoose');
var FeedbackSchema = mongoose.Schema({
    text: {type: String, require: true},
    data: {type: String, require: true},
});

var FeedbackModel = mongoose.model('chinzdb23', FeedbackSchema);

module.exports = FeedbackModel;