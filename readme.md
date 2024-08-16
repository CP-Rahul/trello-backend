# Trello backend

## Description

A node backend designed for managing projects and tasks with user authentication..

## Setup the project

- Download project from github and open it in your favourite code editor.

### Requirements

- Node.js (v12 or higher)

- MongoDB

### backend

- Go inside the folder and execute the following command:

```
npm install
```

- In the root directory create a `.env` file and add the following env variables
  example:

  ```

    PORT=3000
    MONGOURL=your mongodb connection string
    SALT=8
    JWTEXPIRY='1d'
    JWTSECRET='JWT'
  ```

- To run the server execute

```
npm start
```

### Folder Structure

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests.

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `services` -> contains the buiness logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes, dummy data etc.

### Api End Points

- Note: For accessing protected routes, set x-access-token as the JWT token in the header.

- POST -> ` http://localhost:3000/api/v1/user/register`

#### Examples

Case 1: If all requirements are fulfilled :

- Request Body

  ```
  {
  "name": "Joe",
  "email": "joedoe@example.com",
  "password": "123456"
  }

  ```

- Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": {
        "name": "Joe",
        "email": "joedoe@example.com",
        "password": "$2b$08$hufvirdV16.fmrvDGUaFEOWk19pj/n73NWY8ryE.xfmH2pwjve/8.",
        "_id": "66bf5199945fbb3b91514b46",
        "createdAt": "2024-08-16T13:18:17.117Z",
        "updatedAt": "2024-08-16T13:18:17.117Z",
        "__v": 0
    },
    "error": {}
  }
  ```

Case 2: If parameters are missing in the request:

- Request Body

  ```
  {
  "email": "joedoe@example.com",
  "password": "123456"
  }

  ```

- Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "name is not found in the request body",
        "statusCode": 400
    }
  }
  ```

Case 3: If user already exists:

- Request Body

```
 {
  "name": "Joe",
  "email": "joedoe@example.com",
  "password": "123456"
 }
```

- Response

```
 { 
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "User already exixts",
        "statusCode": 400
    }
 }
```

- POST -> ` http://localhost:3000/api/v1/user/login`

#### Examples

Case 1: If all requirements are fulfilled :

- Request Body

  ```
  {
  "email": "joedoe@example.com",
  "password": "123456"
  }

  ```

- Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2NmJmNTE5OTk0NWZiYjNiOTE1MTRiNDYiLCJlbWFpbCI6ImpvZWRvZUBleGFtcGxlLmNvbSJ9fSwiaWF0IjoxNzIzODE1Mjk4LCJleHAiOjE3MjM5MDE2OTh9.xdRWwYqeSE6SlOFcA9vSKPorxBCoRloh167XjY4caiI",
    "error": {}
  }
  ```

Case 2: If parameters are missing in the request:

- Request Body

  ```
  {
  "email": "joedoe@example.com",
  }

  ```

- Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "password is not found in the request body",
        "statusCode": 400
    }
  }
  ```

Case 3: If user not exists:

- Request Body

```
 {
  "name": "Joe",
  "email": "joee@example.com",
  "password": "123456"
 }
```

- Response

```
 {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "User not exixts",
        "statusCode": 400
    }
 }
```

- POST -> `http://localhost:3000/api/v1/project`

#### Examples

Case 1: If all requirements are fulfilled :

- Request Body

  ```
  {
  "name": "project 88",
  "description": "This is a detailed description of the new project."
  }

  ```

- Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": {
        "name": "project 88",
        "description": "This is a detailed description of the new project.",
        "tasks": [],
        "_id": "66bf57ac754954dc9d93a7d1",
        "createdAt": "2024-08-16T13:44:12.143Z",
        "updatedAt": "2024-08-16T13:44:12.143Z",
        "__v": 0
    },
    "error": {}
  }
  ```

Case 2: If parameters are missing in the request:

- Request Body

  ```
  {
  "name": "project 88"
  }


  ```

- Response

  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "descriptionis not found in the request body",
        "statusCode": 400
    }
  }
  ```

- GET -> `http://localhost:3000/api/v1/project`

#### Examples

Case 1: If all requirements are fulfilled :

- Response
  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": [
        {
            "_id": "66bf3c7d081b9c781e7bc548",
            "name": "project 1",
            "description": "This is a detailed description of the new project.",
            "tasks": [],
            "createdAt": "2024-08-16T11:48:13.617Z",
            "updatedAt": "2024-08-16T11:48:13.617Z",
            "__v": 0
        },
        {
            "_id": "66bf3c88081b9c781e7bc54b",
            "name": "project 2",
            "description": "This is a detailed description of the new project.",
            "tasks": [],
            "createdAt": "2024-08-16T11:48:24.031Z",
            "updatedAt": "2024-08-16T11:48:24.031Z",
            "__v": 0
        },
        {
            "_id": "66bf4ce4945fbb3b91514b37",
            "name": "project 3",
            "description": "This is a detailed description of the new project.",
            "tasks": [],
            "createdAt": "2024-08-16T12:58:12.815Z",
            "updatedAt": "2024-08-16T12:58:12.815Z",
            "__v": 0
        },
        {
            "_id": "66bf52c5945fbb3b91514b4c",
            "name": "project 3",
            "description": "This is a detailed description of the new project.",
            "tasks": [],
            "createdAt": "2024-08-16T13:23:17.027Z",
            "updatedAt": "2024-08-16T13:23:17.027Z",
            "__v": 0
        },
        {
            "_id": "66bf57ac754954dc9d93a7d1",
            "name": "project 88",
            "description": "This is a detailed description of the new project.",
            "tasks": [],
            "createdAt": "2024-08-16T13:44:12.143Z",
            "updatedAt": "2024-08-16T13:44:12.143Z",
            "__v": 0
        }
    ],
    "error": {}
  }
  ```

Case 2: If user is not authenticated:

- Response
  ```{
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "Missing JWT token",
        "statusCode": 400
    }
  }
  ```
- GET -> `http://localhost:3000/api/v1/project/id`

#### Examples

Case 1: If all requirements are fulfilled :

- Response

  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "Something went wrong while fetching project",
        "statusCode": 500
    }
  }
  ```

  Case 2: If no project exist :

- Response

  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "Project with given id is not exists",
        "statusCode": 400
    }
  }
  ```

- POST -> `http://localhost:3000/api/v1/task`

#### Examples

Case 1: If all requirements are fulfilled :

- Request Body

```
 {
  "name": "Task 5",
  "description": "Create the initial design for the landing page including the header, footer, and main sections.",
  "status": "Done",
  "tags": ["design"],
  "dueDate": "2024-08-25T00:00:00.000Z",
  "assignedUserId": "66bef1928dac55073a8f8936",
  "projectId": "66bf4ce4945fbb3b91514b37"
 }
```

- Response

  ```
  {
  "name": "Task 5",
  "description": "Create the initial design for the landing page including the header, footer, and main sections.",
  "status": "Done",
  "tags": ["design"],
  "dueDate": "2024-08-25T00:00:00.000Z",
  "assignedUserId": "66bef1928dac55073a8f8936",
  "projectId": "66bf4ce4945fbb3b91514b37"
  }

  ```

  Case 2: If parameters are missing in the request :

  - Request Body

```
 {
  "name": "Task 5",
  "description": "Create the initial design for the landing page including the header, footer, and main sections.",
  "status": "Done",
  "tags": ["design"],
  "dueDate": "2024-08-25T00:00:00.000Z",
  "assignedUserId": "66bef1928dac55073a8f8936",
  "projectId": "66bf4ce4945fbb3b91514b37"
 }
```

- Response
  ```
  {
    "success": false,
    "msg": "Something went wrong",
    "data": {},
    "error": {
        "explanation": "name is not found in the request body",
        "statusCode": 400
    }
  }
  ```
  - GET -> `http://localhost:3000/api/v1/task`

#### Examples

Case 1: If all requirements are fulfilled :

- Response

  ```
  {
    "success": true,
    "msg": "Successfully completed the request",
    "data": [
        {
            "tasks": [
                {
                    "_id": "66bf3ca4081b9c781e7bc550",
                    "name": "Task 2",
                    "description": "Create the initial design for the landing page including the header, footer, and main sections.",
                    "status": "Done",
                    "tags": [
                        "design",
                        "frontend",
                        "high-priority"
                    ],
                    "dueDate": "2024-08-25T00:00:00.000Z",
                    "assignedUserId": "66bef1928dac55073a8f8936",
                    "projectId": "66bf3c88081b9c781e7bc54b",
                    "createdAt": "2024-08-16T11:48:52.650Z",
                    "updatedAt": "2024-08-16T11:48:52.650Z",
                    "__v": 0
                },
                {
                    "_id": "66bf3cad081b9c781e7bc555",
                    "name": "Task",
                    "description": "Create the initial design for the landing page including the header, footer, and main sections.",
                    "status": "Done",
                    "tags": [
                        "design",
                        "frontend",
                        "high-priority"
                    ],
                    "dueDate": "2024-08-25T00:00:00.000Z",
                    "assignedUserId": "66bef1928dac55073a8f8936",
                    "projectId": "66bf3c88081b9c781e7bc54b",
                    "createdAt": "2024-08-16T11:49:01.242Z",
                    "updatedAt": "2024-08-16T11:49:01.242Z",
                    "__v": 0
                },
                {
                    "_id": "66bf4dc4945fbb3b91514b43",
                    "name": "Task",
                    "description": "Create the initial design for the landing page including the header, footer, and main sections.",
                    "status": "Done",
                    "tags": [
                        "design",
                        "frontend",
                        "high-priority"
                    ],
                    "dueDate": "2024-08-25T00:00:00.000Z",
                    "assignedUserId": "66bef1928dac55073a8f8936",
                    "projectId": "66bf4ce4945fbb3b91514b37",
                    "createdAt": "2024-08-16T13:01:56.200Z",
                    "updatedAt": "2024-08-16T13:01:56.200Z",
                    "__v": 0
                },
                {
                    "_id": "66bf5c2f1b1900c1dbb8c00d",
                    "name": "Task 5",
                    "description": "Create the initial design for the landing page including the header, footer, and main sections.",
                    "status": "Done",
                    "tags": [
                        "design"
                    ],
                    "dueDate": "2024-08-25T00:00:00.000Z",
                    "assignedUserId": "66bef1928dac55073a8f8936",
                    "projectId": "66bf4ce4945fbb3b91514b37",
                    "createdAt": "2024-08-16T14:03:27.373Z",
                    "updatedAt": "2024-08-16T14:03:27.373Z",
                    "__v": 0
                }
            ],
            "status": "Done"
        }
    ],
    "error": {}
  }

  ```
