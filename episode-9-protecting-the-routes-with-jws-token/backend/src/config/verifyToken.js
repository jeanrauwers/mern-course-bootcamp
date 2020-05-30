

function verifyToken(req, res, next) {
	const bearerToken = req.header('user')
	if (typeof bearerToken !== 'undefined') {
		req.token = bearerToken
		next()
	} else {
		res.sendStatus(401)
	}
}

module.exports = verifyToken