const express = require('express')

const Posts = require('../data/helpers/postDb')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get()
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't retrieve posts."
        })
    }
}) 


router.get('/:id', async (req, res) => {
    try {
        const posts = await Posts.getById(req.params.id);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "The post information could not be retrieved."
        })
    }
})


router.post('/', async (req, res) => {
    try {
        const posts = await Posts.insert(req.body)
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "There was an error while saving the post to the database"
        })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const posts = await Posts.update(req.params.id);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Couldn't modify that Post"
        })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const posts = await Posts.remove(req.params.id);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'The post could not be removed.'
        })
    }
})

module.exports = router