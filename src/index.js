const userService = require('./services/userService');

const main = () => {
    const users = userService.getAllUsers();
    console.log('Users:', users);
    
    const newUser  = userService.createUser ({ name: "Alice Johnson", email: "alice@example.com" });
    console.log('New User:', newUser );
    
    const user = userService.getUser ById(1);
    console.log('Fetched User:', user);
    
    const deletedUser  = userService.deleteUser (2);
    console.log('Deleted User:', deletedUser );
};

main();
