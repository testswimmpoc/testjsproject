const userService = require('../src/services/userService');

describe('User  Service', () => {
    it('should fetch all users', () => {
        const users = userService.getAllUsers();
        expect(users.length).toBe(2);
    });

    it('should fetch user by ID', () => {
        const user = userService.getUser ById(1);
        expect(user.name).toBe("John Doe");
    });

    it('should create a new user', () => {
        const newUser  = userService.createUser ({ name: "Bob Brown", email: "bob@example.com" });
        expect(newUser .name).toBe("Bob Brown");
    });

    it('should delete a user', () => {
        const deletedUser  = userService.deleteUser (1);
        expect(deletedUser .name).toBe("John Doe");
    });
});
