const { getAllDB, getByIdDB, createUserDB, updateUserDB, deleteUserDB } = require('../repository/user.repository');

const getAll = async () => {
    return await getAllDB()
}

const getById = async (id) => {
    return await getByIdDB(id)
}

const createUser = async (user) => {
    return await createUserDB(user);
}

const updateUser = async (user, _id) => {
    return await updateUserDB(user, _id);
}

const deleteUser = async (id) => {
    return await deleteUserDB(id);
}

module.exports = { getAll, getById, createUser, updateUser, deleteUser }