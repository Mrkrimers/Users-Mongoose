const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse')
const { getAll, getById, createUser, deleteUser, updateUser } = require('../service/user.service')

route.get('/', async (req, res) => {
    try {
        buildResponse(res, 200, await getAll())
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const data = await getById(req.params._id)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req, res) => {
    try {
        buildResponse(res, 200, await createUser(req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await updateUser(req.body, req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await deleteUser(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

module.exports = route;