//@ts-check
import http from 'http';
import router from './router.js'

// Creating server
const server = http.createServer(router);

const PORT = 3000; 
// Start server at port 3000
server.listen(PORT, () => {
    console.log(`Started server at PORT ${PORT}`)
})
