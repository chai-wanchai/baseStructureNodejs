import teacher from './teacher'
import course from './course'
export default (sequelize) => {
	let model = {
		teacher: teacher(sequelize),
		course: course(sequelize)
	}
	model.teacher.hasMany(model.course)
	model.course.belongsTo(model.teacher)
	return model
}