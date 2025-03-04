const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});
const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    batches: {
        morning: {
            type: batchSchema,
            required:false
        },
        evening: {
            type: batchSchema,
            required:false
        }
    }
});

const CampusProgramDescription = mongoose.model('Program', programSchema);
module.exports = CampusProgramDescription;
