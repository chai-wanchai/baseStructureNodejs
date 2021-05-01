import { Sequelize } from 'sequelize'
import { config } from '../config/config'
import model from '../models'
export class Database {
	constructor() {
		this.connection = null
	}
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
			this.connection = sequelize
			model(sequelize)
			sequelize.sync()
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	}
	getConnection() {
		return this.connection
	}
	getModel() {
		return model(this.connection)
	}
}
export default new Database()