const Event = require('../models/Event')
const jwt = require('jsonwebtoken')

module.exports = {
	getEventById(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {
				const { eventId } = req.params
				try {
					const events = await Event.findById(eventId)

					if (events) {
						return res.json({ authData: authData, events: events })
					}
				} catch (error) {
					return res.status(400).json({ message: 'EventId does not exist!' })
				}
			}

		})
	},
	getAllEvents(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {
				const { sport } = req.params
				const query = sport ? { sport } : {}

				try {
					const events = await Event.find(query)
					
					if (events) {
						return res.json({ authData, events })
					}
				} catch (error) {
					return res.status(400).json({ message: 'We do have any events yet' })
				}

			}
		})
	},

	getEventsByUserId(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.sendStatus(401)
			} else {

				const { user_id } = req.headers

				try {
					const events = await Event.find({ user: authData.user._id })

					if (events) {
						return res.json({ authData, events })
					}
				} catch (error) {
					return res.status(400).json({ message: `We do have any events with the user_id ${user_id}` })
				}
			}
		})
	}
}