const { TableUser, ObjectId } = require('../bd')


const getAllDB = async () => {
    return await TableUser.find();
}

const getByIdDB = async (id) => {
    return await TableUser.findOne({ _id: new ObjectId(id) });
}

const createUserDB = async (user) => {
    await TableUser.create(user);

    return await TableUser.find();
}

const updateUserDB = async (user, _id) => {
    await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });

    return await TableUser.find();
}

const deleteUserDB = async (_id) => {
    await TableUser.deleteOne({ _id: new ObjectId(_id) });

    return await TableUser.find();
}

module.exports = { getAllDB, getByIdDB, createUserDB, updateUserDB, deleteUserDB }