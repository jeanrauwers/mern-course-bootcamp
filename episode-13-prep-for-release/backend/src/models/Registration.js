const mongoose = require('mongoose')

const RegistrationSchema = new mongoose.Schema({
	date: () => Date.now(),
	approved: Boolean,
	owner: String,
	eventTitle: String,
	eventPrice: String,
	userEmail:String,
	eventDate:String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	event: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
	}
})

module.exports = mongoose.model('Registration', RegistrationSchema)