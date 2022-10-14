import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['http://dev.bakkersonline.be:8888'],
    },
})

app.get('/', (req, res) => res.send('<h1>Dag meneer!</h1>'))

io.on('connection', (socket) => {
    console.log('der is hier ne meneer')

    socket.emit('bericht', 'dag meneer!')

    socket.on('klok', (time) => {
        console.log(`de meneer zegt dat bij hem ${time} is`)
        io.emit('bericht', `ne meneer zegt dat het bij hem ${time} is`)
    })
})
io.on('disconnect', () => console.log('diene meneer is weggegaan'))

server.listen(3000, () => console.log('listening on *:3000'))
