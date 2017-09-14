module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		user: {
			type: DataTypes.STRING,
			allowNull:false
		},

		name: DataTypes.STRING,

		email: DataTypes.STRING,

		password: DataTypes.STRING,

		movingTo: DataTypes.STRING,

		movingFrom: DataTypes.STRING,

		salary: DataTypes.STRING,

		household: DataTypes.INTEGER,

	});
	return User;
}

// // GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// });