const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse');
const { getAllSkill, getByIdSkill, createSkill, updateSkill, deleteSkill } = require('../service/skill.service');

route.get('/', async (req, res) => {
    try {
        buildResponse(res, 200, await getAllSkill())
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await getByIdSkill(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req, res) => {
    try {
        buildResponse(res, 200, await createSkill(req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})
route.put('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await updateSkill(req.params._id, req.body))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        buildResponse(res, 200, await deleteSkill(req.params._id))
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

module.exports = route;