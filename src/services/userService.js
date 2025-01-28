const { users, getNewId } = require('../database/mockDB');
const logger = require('../utils/logger');

const userService = {
    getAllUsers: () => {
        logger.log('Fetching all users');
        return users;
    },

    getUserById: (id) => {
        logger.log(`Fetching user with ID: ${id}`);
        return users.find(user => user.id === id);
    },

    createUser: (userData) => {
        const newUser = { id: getNewId(), ...userData };
        users.push(newUser);
        logger.log(`Created new user: ${JSON.stringify(newUser)}`);
        return newUser;
    },

    deleteUser: (id) => {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            const deletedUser  = users.splice(index, 1);
            logger.log(`Deleted user: ${JSON.stringify(deletedUser )}`);
            return deletedUser [0];
        }
        logger.log(`User  with ID: ${id} not found`);
        return null;
    }
};

module.exports = userService;
