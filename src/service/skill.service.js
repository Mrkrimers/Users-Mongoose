const { getAllSkillDB, getByIdSkillDB, createSkillDB, updateSkillDB, deleteSkillDB } = require("../repository/skill.repository")

const getAllSkill = async () => {
    return await getAllSkillDB()
}

const getByIdSkill = async (id) => {
    return await getByIdSkillDB(id)
}

const createSkill = async (skill) => {
    return await createSkillDB(skill)
}

const updateSkill = async (id, skill) => {
    return await updateSkillDB(id, skill);
}
const deleteSkill = async (id) => {
    return await deleteSkillDB(id);
}

module.exports = { getAllSkill, getByIdSkill, createSkill, updateSkill, deleteSkill }