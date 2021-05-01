import teacher from './teacher'
import course from './course'
export default (sequelize)=>{
	teacher(sequelize)
	course(sequelize)
}