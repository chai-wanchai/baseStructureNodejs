import { DataTypes } from "sequelize/types";

export class Teacher extends Model {}
Teacher.init(
	{
		id:{
			type:DataTypes.INTEGER,
			
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
	},
);
