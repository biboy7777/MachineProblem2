const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobOfferSchema = new Schema({
    jobTitle: {
        type: String,
        required: [true, "Please enter a job title."]
    },
    jobDescription: {
        type: String,
        required: [true, "Please enter a job description."]
    },
    salaryPerMonth: {
        type: Number,
        required: [true, "Please enter salary amount."],
    },
    jobCategory: {
        type: String,
        enum: {
            values: ["Entry", "Intermediate", "Expert"],
            message: "Invalid Category."
        }
    },
    skillsRequired: [String],
    offeredBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Employer",
        required: true
    },
    applicants: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "JobSeeker"
    }]
});

// Adds function for querying/searching a particular job offer
jobOfferSchema.statics.findByJobTitle = function (jobTitle) {
    return this.find({jobTitle: new RegExp(jobTitle, "i")})
};

// Adds function for querying/searching a job offer based on salary
jobOfferSchema.statics.findBySalaryRange = function (min, max) {
    return this.find().where("salaryPerMonth").gte(min).lte(max)
}

const JobOffer = mongoose.model('JobOffer', jobOfferSchema);
module.exports = JobOffer;