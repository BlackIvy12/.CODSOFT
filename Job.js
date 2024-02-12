const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema ({
    employerUsername: {type:String, required:true},
    title: {type:String, required:true},
    location: {type:String, required:true},
    description: {type:String, required:true}
});

const Job = mongoose.model ('Job', jobSchema);

module.exports = Job;