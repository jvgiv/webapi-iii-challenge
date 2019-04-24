const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')

const postsRouter = require('./posts/posts-router.js')
const usersRouter = require('./users/users-router')

const server = express();

server.use(express.json());
server.use(helmet())
server.use(morgan('dev'))

server.get('/', (req, res, next) => {
    res.send(`
        <h1>Posts and Users API</h1>
        <h3>Welcome</h3>
    `)
})

// Posts Router
server.use('/api/posts', postsRouter)

server.use('/api/users', usersRouter)



module.exports = server