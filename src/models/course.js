

import { DataTypes, Model } from 'sequelize'
import { Teacher } from "./teacher";

export class Course extends Model { }
export default (sequelize) => {
	Course.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			course_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			course_description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			teacher_id: {
				type: DataTypes.INTEGER,
				references: {
					model: Teacher,
					key: 'id',
				}
			}
		},
		{
			sequelize,
			tableName: 'course',
			freezeTableName: true,
		},
	);
	return Course
}
