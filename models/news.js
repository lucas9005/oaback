// Imports
const mongoose = require('mongoose');

// Schema
const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Exports
const News = module.exports = mongoose.model('News', newsSchema);

// Create News
module.exports.postNews = (body, callback) => {
    News.create(body, callback);
};

// Read News
module.exports.getNews = (limit, callback) => {
    News.find(callback).limit(limit);
};

// Update News
module.exports.updateNews = (id, body, options, callback) => {
    News.findOneAndUpdate({_id: id}, body, options, callback);
};

// Delete News
module.exports.deleteNews = (id, callback) => {
    News.deleteOne({_id: id}, callback);
};