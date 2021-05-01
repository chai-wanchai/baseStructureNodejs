
import { DataTypes, Model } from 'sequelize'
export class Teacher extends Model { }

export default (sequelize) => {
	Teacher.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true
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
	return Teacher
}