

import { DataTypes } from 'sequelize'
import Teacher from "./teacher";

export default (sequelize) => {
	const Course = sequelize.define('Course', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		course_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		course_description: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
		{
			sequelize,
			tableName: 'course',
			freezeTableName: true,
			createdAt: false,
			updatedAt: false
		},
	);
	return Course
}
