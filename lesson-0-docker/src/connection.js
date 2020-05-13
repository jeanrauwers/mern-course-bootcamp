

const connectDb = () => {
    try {
        return mongoose.connect(connection);

    } catch (error) {
        throw Error(error)
    }
};

module.exports = connectDb;