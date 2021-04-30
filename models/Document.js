const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    _id: String,
    data: {
        type: Object,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Document = mongoose.model('Document', DocumentSchema)

module.exports = Document