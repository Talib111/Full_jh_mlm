const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/secret');

const adminSignUp = async (req, res) => {
	const { name, email, password } = req.body;
	bcrypt.genSalt(saltRounds, function (err, salt) {
		if (err) throw err;
		bcrypt.hash(password, salt, async function (err, hash) {
			if (err) throw err;
			const admin = await new Admin({
				name,
				email,
				password: hash,
			}).save();

			return res.json({
				error: false,
				message: 'admin created',
				payload: admin,
			});
		});
	});
};

const adminSignIn = async (req, res) => {
	const { email, password } = req.body;
	const admin = await Admin.findOne({
		email,
	});

	if (!admin)
		return res.json({
			error: true,
			message: 'no admin found',
		});

	bcrypt.compare(password, admin.password, async function (err, result) {
		if (err) throw err;

		if (!result)
			return res.json({
				error: true,
				message: 'password not matched',
			});

		var token = await jwt.sign({ _id: admin._id, name: admin.name }, SECRET,{
			expiresIn:"3d"
		});
		return res.json({
			error: false,
			message: 'signin successfully',
			payload: token,
		});
	});
};
module.exports = {
	adminSignIn,
	adminSignUp,
};
