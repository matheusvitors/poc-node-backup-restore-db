const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new mongoose.Schema({

	name: {
		type: String,
		required: true
	},

	category: {
		type: Schema.Types.ObjectId,
		ref: "Category"
	},

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
