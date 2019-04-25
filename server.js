const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan')

const postsRouter = require('./posts/posts-router.js')
const usersRouter = require('./users/users-router')

const server = express();



server.use(express.json());
server.use(helmet())
server.use(morgan('dev'))


function upperCased(req, res, next) {

    if(req.method === 'POST' || req.method === 'PUT') {
        if (req.body.name.charAt(0) == req.body.name.charAt(0).toUpperCase()) {
            next();
        } else {
            res.status(500).json({
                message: "Please capitalize the first letter of the name."
            })
        }
    } else {
        next();
    }
}


// Endpoints
server.get('/', (req, res, next) => {
    res.send(`
        <h1>Posts and Users API</h1>
        <h3>Welcome</h3>
    `)
})

server.use('/api/posts', postsRouter)

server.use('/api/users', upperCased, usersRouter)



module.exports = server