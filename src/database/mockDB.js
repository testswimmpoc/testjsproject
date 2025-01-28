let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

let currentId = 2;

const getNewId = () => ++currentId;

module.exports = {
    users,
    getNewId
};
