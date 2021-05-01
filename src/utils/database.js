import { Sequelize } from 'sequelize'
import { config } from '../config/config'

export class Database {

	async connect() {
		const { database } = config
		const configDB = {
			host: database.hostname,
			port: database.port,
			database: database.db_name,
			username: database.username,
			password: database.password,
			dialect: database.type
		}
		const sequelize = new Sequelize(configDB)
		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}		
	}
}
export default new Database()