const mongoose = require("mongoose");
var AutoIncrement = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema({

    Id: {
        type: Number
    },
    title: {
        type: String,
        required: true,
    },
    stage: {
        type: Number,
        default: 1
    }
})

schema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'Id'});
const Schema = mongoose.model("board", schema)

module.exports = Schema;