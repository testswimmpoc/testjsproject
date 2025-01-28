---
title: User Manager Project
---
## **Overview**

The User Manager project is a simple command-line interface (CLI) application built in JavaScript. It provides basic user management functionalities, including fetching all users, fetching a user by ID, creating a new user, and deleting a user. The project is structured to demonstrate best practices in modular programming, separation of concerns, and unit testing.

## **Project Structure**

testjsproject/

├── <SwmPath>[src/](/src/)</SwmPath>

│   ├── <SwmPath>[src/database/](/src/database/)</SwmPath>

│   │   └── <SwmPath>[src/database/mockDB.js](/src/database/mockDB.js)</SwmPath>

│   ├── <SwmPath>[src/services/](/src/services/)</SwmPath>

│   │   └── <SwmPath>[src/services/userService.js](/src/services/userService.js)</SwmPath>

│   ├── <SwmPath>[src/utils/](/src/utils/)</SwmPath>

│   │   └── <SwmPath>[src/utils/logger.js](/src/utils/logger.js)</SwmPath>

│   └── <SwmPath>[src/index.js](/src/index.js)</SwmPath>

├── <SwmPath>[tests/](/tests/)</SwmPath>

│   └── <SwmPath>[tests/userService.test.js](/tests/userService.test.js)</SwmPath>

├── <SwmPath>[.gitignore](/.gitignore)</SwmPath>

├── <SwmPath>[package.json](/package.json)</SwmPath>

├── <SwmPath>[README.md](/README.md)</SwmPath>

&nbsp;

## **Modules**

<SwmPath>[src/database/mockDB.js](/src/database/mockDB.js)</SwmPath>

**Purpose**: This file acts as a mock database, simulating user data storage.

**Key Components**:

<SwmSnippet path="src/database/mockDB.js" line="1">

---

&nbsp;

```
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
```

---

</SwmSnippet>

Contains a list of user objects with <SwmToken path="/src/database/mockDB.js" pos="2:3:3" line-data="    { id: 1, name: &quot;John Doe&quot;, email: &quot;john@example.com&quot; },">`id`</SwmToken>, <SwmToken path="/src/database/mockDB.js" pos="2:9:9" line-data="    { id: 1, name: &quot;John Doe&quot;, email: &quot;john@example.com&quot; },">`name`</SwmToken>, and <SwmToken path="/src/database/mockDB.js" pos="2:19:19" line-data="    { id: 1, name: &quot;John Doe&quot;, email: &quot;john@example.com&quot; },">`email`</SwmToken>

Generates a <SwmToken path="/src/database/mockDB.js" pos="8:2:2" line-data="const getNewId = () =&gt; ++currentId;">`getNewId`</SwmToken> for each user created.

**Importance**:

- Provides a simple way to manage user data without needing a real database.

- Facilitates testing and development by allowing easy manipulation of user data.

&nbsp;

<SwmPath>[src/services/userService.js](/src/services/userService.js)</SwmPath>

**Purpose**: Contains the business logic for user management operations.

**Key Functions**:

<SwmSnippet path="/src/services/userService.js" line="4">

---

Here we define `us`<SwmToken path="/src/services/userService.js" pos="4:2:2" line-data="const userService = {">`userService`</SwmToken>ith a method <SwmToken path="/src/services/userService.js" pos="5:1:1" line-data="    getAllUsers: () =&gt; {">`getAllUsers`</SwmToken> that logs a message and returns the list of <SwmToken path="/src/services/userService.js" pos="7:3:3" line-data="        return users;">`users`</SwmToken>

```javascript
const userService = {
    getAllUsers: () => {
        logger.log('Fetching all users');
        return users;
    },
```

---

</SwmSnippet>

<SwmSnippet path="/src/services/userService.js" line="10">

---

Here we fetch a user from the <SwmToken path="/src/services/userService.js" pos="12:3:3" line-data="        return users.find(user =&gt; user.id === id);">`users`</SwmToken> array by matching the <SwmToken path="/src/services/userService.js" pos="10:5:5" line-data="    getUserById: (id) =&gt; {">`id`</SwmToken> and log the action.

```javascript
    getUserById: (id) => {
        logger.log(`Fetching user with ID: ${id}`);
        return users.find(user => user.id === id);
    },
```

---

</SwmSnippet>

<SwmSnippet path="/src/services/userService.js" line="15">

---

Here we create a new user object with a unique <SwmToken path="/src/services/userService.js" pos="16:9:9" line-data="        const newUser = { id: getNewId(), ...userData };">`id`</SwmToken>, add it to the <SwmToken path="/src/services/userService.js" pos="17:1:1" line-data="        users.push(newUser);">`users`</SwmToken> array, log the creation, and return the new user.

```javascript
    createUser: (userData) => {
        const newUser = { id: getNewId(), ...userData };
        users.push(newUser);
        logger.log(`Created new user: ${JSON.stringify(newUser)}`);
        return newUser;
    },
```

---

</SwmSnippet>

<SwmSnippet path="/src/services/userService.js" line="22">

---

Here we delete a user from the <SwmToken path="/src/services/userService.js" pos="23:7:7" line-data="        const index = users.findIndex(user =&gt; user.id === id);">`users`</SwmToken> array by finding its index with <SwmToken path="/src/services/userService.js" pos="23:9:9" line-data="        const index = users.findIndex(user =&gt; user.id === id);">`findIndex`</SwmToken>, removing it with <SwmToken path="/src/services/userService.js" pos="25:9:9" line-data="            const deletedUser  = users.splice(index, 1);">`splice`</SwmToken>, and logging the action.

```javascript
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
```

---

</SwmSnippet>

**Importance**:

- Encapsulates the core functionality of the application, making it reusable and maintainable.

- Separates business logic from data storage, adhering to the Single Responsibility Principle.

&nbsp;

<SwmPath>[src/utils/logger.js](/src/utils/logger.js)</SwmPath>

**Purpose**: Provides a simple logging utility for the application.

**Key Function**:

<SwmSnippet path="/src/utils/logger.js" line="1">

---

Here we define a <SwmToken path="/src/utils/logger.js" pos="1:2:2" line-data="const logger = {">`logger`</SwmToken> object that formats and outputs log messages with a timestamp.

```javascript
const logger = {
    log: (message) => {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }
};

module.exports = logger;
```

---

</SwmSnippet>

**Importance**:

- Centralizes logging functionality, making it easy to modify or extend in the future.

- Helps in debugging and monitoring application behavior during development and production.

&nbsp;

<SwmPath>[src/index.js](/src/index.js)</SwmPath>

**Purpose**: The entry point of the application, orchestrating the user management operations.

**Key Components**:

<SwmSnippet path="/src/index.js" line="1">

---

Here we interact with <SwmToken path="/src/index.js" pos="1:2:2" line-data="const userService = require(&#39;./services/userService&#39;);">`userService`</SwmToken> to fetch all users, create a new user, retrieve a user by ID, and delete a user.

```javascript
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
```

---

</SwmSnippet>

**Importance**:

- Serves as the main interface for the application, allowing users to see the results of the user management operations.

- Provides a clear flow of how the application works, making it easier for new developers to understand.

&nbsp;

<SwmPath>[tests/userService.test.js](/tests/userService.test.js)</SwmPath>

**Purpose**: Contains unit tests for the `userService` functions.

**Key Tests**:

<SwmSnippet path="/tests/userService.test.js" line="1">

---

Here we test the <SwmToken path="/tests/userService.test.js" pos="1:2:2" line-data="const userService = require(&#39;../src/services/userService&#39;);">`userService`</SwmToken> by checking if it can fetch all users, fetch a user by ID, create a new user, and delete a user.

```javascript
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
```

---

</SwmSnippet>

**Importance**:

- Ensures that the application functions as expected and helps catch bugs early in the development process.

- Promotes confidence in code changes and refactoring by providing a safety net through automated tests.

&nbsp;

&nbsp;

&nbsp;

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBdGVzdGpzcHJvamVjdCUzQSUzQXRlc3Rzd2ltbXBvYw==" repo-name="testjsproject"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
