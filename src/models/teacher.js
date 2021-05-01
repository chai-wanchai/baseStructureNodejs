
import { DataTypes } from 'sequelize'

export default (sequelize) => {
	const Teacher = sequelize.define('Teacher', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date_of_birth: {
			type: DataTypes.DATEONLY,
			allowNull: true
		}
	},
		{
			sequelize,
			tableName: 'teachers',
			freezeTableName: true,
			createdAt: false,
			updatedAt: false
		},
	);
	return Teacher
}