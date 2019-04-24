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


// router.get()


// router.post()


// router.put()


// router.delete()

module.exports = router