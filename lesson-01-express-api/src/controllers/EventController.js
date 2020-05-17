const Event = require('../models/Event');
const User = require('../models/User');

module.exports = {
    async createEvent(req, res) {
        const { title, description, price } = req.body;
        const { user_id } = req.headers;
        const { filename } = req.file;

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ message: 'User does not exist!' })
        }

        const event = await Event.create({
            title,
            description,
            price: parseFloat(price),
            user: user_id,
            thumbnail: filename
        })

        return res.json(event);
    },

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
    }
}