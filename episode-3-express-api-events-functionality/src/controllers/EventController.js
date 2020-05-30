const Event = require('../models/Event');
const User = require('../models/User');

module.exports = {
    async createEvent(req, res) {
        const { title, description, price, sport } = req.body;
        const { user_id } = req.headers;
        const { filename } = req.file;

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ message: 'User does not exist!' })
        }

        const event = await Event.create({
            title,
            description,
            sport,
            price: parseFloat(price),
            user: user_id,
            thumbnail: filename
        })

        return res.json(event);
    },

    async delete(req, res) {
        const { eventId } = req.params;
        try {
            await Event.findByIdAndDelete(eventId)
            return res.status(204).send()

        } catch (error) {
            return res.status(400).json({ message: 'We do have any event with the ID' })
        }
    }
}