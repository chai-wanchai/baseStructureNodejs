
import { DataTypes } from "sequelize/types";
import { Teacher } from "./teacher";

export class Course extends Model {}
Course.init(
	{
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
