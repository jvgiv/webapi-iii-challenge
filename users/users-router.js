const express = require('express')

const Users = require('../data/helpers/userDb')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await Users.get()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't retrieve users."
        })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const users = await Users.getById(req.params.id);
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't retrieve that user by ID"
        })
    }
})


router.get('/:id/posts', async (req, res) => {
    try {
        const users = await Users.getUserPosts(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldnt get user's posts"
        })
    }
})


router.post('/', async (req, res) => {
    try {
        const users = await Users.insert(req.body)
        res.status(201).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't add the user"
        })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const users = await Users.update(req.params.id, req.body);
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't make an edit"
        })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const users = await Users.remove(req.params.id);
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Could not Delete'
        })
    }
})

module.exports = router