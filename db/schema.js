var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var SubscriberSchema = new Schema({
    account: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: String,
        default: '1'
    },
    language: {
        type: String,
        default: 'en'
    }
});
SubscriberSchema.plugin(uniqueValidator);

/*
 var SessionSchema = new Schema({
 token: { type: String, required: true, unique: true },
 account: { type: String, required: true },
 login_time: Date,
 last_operation: Date,
 });
 SessionSchema.plugin(uniqueValidator);
 */

var PlayduinoProjectSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    xml_code: {
        type: String,
        default: null
    },
    ipaddress: {
        type: String,
        default: '127.0.0.1'
    },
    active: {
        type: String,
        default: '1'
    },
    published: {
        type: String,
        default: '1'
    },
    fork_from: {
        type: String,
        default: null
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }
});
PlayduinoProjectSchema.plugin(uniqueValidator);
//PlayduinoProjectSchema.index({ account: 1, project_name: 1}, { unique: true });

var PlaypiProjectSchema = new Schema({
    account: String,
    project_name: String,
    xml_code: String,
    active: String
});
PlaypiProjectSchema.plugin(uniqueValidator);
//PlaypiProjectSchema.index({ account: 1, project_name: 1}, { unique: true });

var PlaydrawingProjectSchema = new Schema({
    account: {
        type: String,
        required: true
    },
    project_name: {
        type: String,
        required: true
    },
    xml_code: {
        type: String,
        default: null
    },
    ipaddress: {  //not used
        type: String,
        default: '127.0.0.1'
    },
    active: {
        type: String,
        default: '1'
    },
    published: {
        type: String,
        default: '1'
    },
    fork_from: {
        type: String,
        default: null
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    date_modified: {
        type: Date,
        default: Date.now()
    }
});
PlaydrawingProjectSchema.plugin(uniqueValidator);
//PlaydrawingProject.index({ account: 1, project_name: 1}, { unique: true });

var ConfigurationSchema = new Schema({
    seesion_timeout: Number
});

exports.Subscriber = mongoose.model('Subscriber', SubscriberSchema);
//exports.Session = mongoose.model('Session', SessionSchema);
exports.PlayduinoProject = mongoose.model('PlayduinoProject', PlayduinoProjectSchema);
exports.PlaypiProject = mongoose.model('PlaypiProject', PlaypiProjectSchema);
exports.PlaydrawingProject = mongoose.model('PlaydrawingProject', PlaydrawingProjectSchema);
exports.Configuration = mongoose.model('Configuration', ConfigurationSchema);