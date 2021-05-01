import express from 'express'
import * as teacherController from '../controllers/TeacherController'
import * as courseController from '../controllers/CourseController'
const router = express.Router()
router.get('/teachers',teacherController.getAllTeachers)
router.post('/teacher',teacherController.createTeacher)
router.get('/courses',courseController.getAllCourse)
router.post('/:teacher_id/course',courseController.createCourse)
module.exports = router