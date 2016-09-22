/**
 * Created by DYohns on 2016/9/22.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true}
});

model.exports = mongoose.model('Product', schema);