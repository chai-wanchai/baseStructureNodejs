import http from 'http'
import app from './app'
import database from './utils/database'
// /** * Get port from environment and store in Express. */
let port = process.env.PORT || '3000'

/** * Create HTTP server. */
let server = http.createServer(app)

/** * Listen on provided port, on all network interfaces. */
server.listen(port,()=>{
	console.log(`Server start at http://localhost:${port}`)
	database.connect()
})