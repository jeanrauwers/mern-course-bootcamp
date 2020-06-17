const Registration = require('../models/Registration')
const jwt = require('jsonwebtoken')

module.exports = {
	approval(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {
				const { registration_id } = req.params
				
				try {
					const registration = await Registration.findById(registration_id);

					if (registration ) {
						registration.approved = true
						await registration.save()
					
						return res.json(registration)
					} 

				} catch (error) {
					return res.status(400).json(error)
				}
			}
		})
	}
}