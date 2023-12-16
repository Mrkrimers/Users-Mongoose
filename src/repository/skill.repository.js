const { TableSkill, ObjectId } = require('../bd');


const getAllSkillDB = async () => {
    return await TableSkill.find();
}

const getByIdSkillDB = async (id) => {
    return await TableSkill.findOne({ _id: new ObjectId(id) });
}

const createSkillDB = async (skill) => {
    await TableSkill.create(skill)

    return await TableSkill.find();
}

const updateSkillDB = async (id, skill) => {
    await TableSkill.updateOne({ _id: new ObjectId(id) }, { $set: skill })

    return await TableSkill.find();
}

const deleteSkillDB = async (id) => {
    await TableSkill.deleteOne({ _id: new ObjectId(id) })

    return await TableSkill.find();
}

module.exports = { getAllSkillDB, getByIdSkillDB, createSkillDB, updateSkillDB, deleteSkillDB }