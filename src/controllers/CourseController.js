import database from '../utils/database'
export async function getAllCourse(req, res, next) {
	try {
		const model = database.getModel()
		let data = await model.course.findAll({
			include: [
				{ model: model.teacher }]
		})
		res.json({ data })
	} catch (error) {
		res.status(400).json({ error: error.message })
	}

}
export async function createCourse(req, res, next) {
	try {
		const model = database.getModel()
		let { teacher_id } = req.params
		teacher_id = parseInt(teacher_id)
		const teacher = await model.teacher.findByPk(teacher_id)
		if (!teacher) {
			throw new Error('Not Found Teacher to create course.')
		}
		let { course_name, course_description } = req.body
		if (!course_name) {
			throw new Error('Require [course_name]')
		}
		if (!course_description) {
			throw new Error('Require [course_description]')
		}
		let create = await model.course.create({
			course_name,
			course_description,
			TeacherId: teacher.id
		})
		res.json({
			message: "created successfully",
			data: create
		})
	} catch (error) {
		res.status(400).json({ error: error.message })
	}

}