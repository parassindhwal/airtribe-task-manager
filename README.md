# Task Manager 

Rest api's for simple task manager application. The API will allow user to perform CRUD operation on tasks




## Step to run the application:

1. To install node dependencies
     >```npm install```
2. To run the server
    >```npm run start```

### API's endpoint (with examples sample)
1. GET: ..../tasks:      --To retrieve all tasks.
    ```example:
           endpoint:  http://localhost:3000/tasks/

2. GET:   ..../tasks/:id:      --To retrieve a single task by its ID.
    
    ```example:
            endpoint:  http://localhost:3000/tasks/1/
            id: 1

3. POST: ..../tasks:   --To create a new task.

    ```example:
            endpoint:  http://localhost:3000/tasks/
            payload: {
                "id": 1,
                "title": "Create a new project",
                "description": "Create a new project using Magic",
                "completed": false
                }

4. PUT:   ..../tasks/:id:    --To update an existing task by its ID.
    ``` example:
            endpoint:  http://localhost:3000/tasks/1/
            payload: {
                "description": "Create a new project using Magic",
                "completed": false
                }

5. DELETE:   .... /tasks/:id:    --To delete a task by its ID.
    ```example:
            endpoint:  http://localhost:3000/tasks/1/
            id: 1
    
