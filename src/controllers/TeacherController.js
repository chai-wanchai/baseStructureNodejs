
import database from '../utils/database'
import moment from 'moment'
export async function getAllTeachers(req, res, next) {
  try {
    const model = database.getModel()
    let data = await model.teacher.findAll()
    return res.json({ data })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export async function createTeacher(req, res, next) {
  try {
    let { first_name, last_name, date_of_birth } = req.body
    date_of_birth = moment(date_of_birth)
    if (!date_of_birth.isValid()) {
      throw new Error('Invalid Date Of Birth [YYYY-MM-DD]')
    }
    if (!first_name) {
      throw new Error('Require [first_name]')
    }
    if (!last_name) {
      throw new Error('Require [last_name]')
    }
    const model = database.getModel()
    let create = await model.teacher.create({
      first_name,
      last_name,
      date_of_birth
    })
    res.json({
      message: "created successfully",
      data: create
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}