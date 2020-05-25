const Event = require('../models/Event');

module.exports = {
    async getEventById(req, res) {
        const { eventId } = req.params;
        try {
            const event = await Event.findById(eventId)

            if (event) {
                return res.json(event)
            }
        } catch (error) {
            return res.status(400).json({ message: 'EventId does not exist!' })
        }
    },
    async getAllEvents(req, res) {
        const { sport } = req.params;
        const query = sport ? { sport } : {}

        try {
            const events = await Event.find(query)

            if (events) {
                return res.json(events)
            }
        } catch (error) {
            return res.status(400).json({ message: 'We do have any events yet' })
        }
    }
}