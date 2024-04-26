//get task DB 
const taskData = require('../../task.json');
const taskValidator = require('../../helpers/validator');
const updateTaskData = require('../../helpers/updateTaskDB');

const getAlltasks = (req, res) =>{
    try {
        if(req.query.completed) {
            let completed = req.query.completed === "false" ? false : true;
            let filtered = taskData.tasks.filter(task => task.completed == completed) ;
            if(filtered.length) {
                return res.status(200).json(filtered);
            } else {
                return res.status(404).json('Task not found');
            }
        }
        return res.status(200).json(taskData.tasks);
    }catch(err) {
        return res.status(500).json("error", err);
    }
};

const getTask = (req, res) =>{
    try {
        const {id} = req.params;
        let task = taskData.tasks.find(task => task.id == id);
        if(task) {
            return res.status(200).json(task);
        } 
        return res.status(404).json("Task not found");
    } catch(err) {
        return res.status(500).json("error", err);
    }
};

const createTask = (req, res) => {
    try {
        const taskInfo = req.body;

        let taskDataModified = taskData;
        taskDataModified.tasks.push(taskInfo);
        if(taskValidator.validateTaskInfo(taskInfo).status === true) {
            updateTaskData('./task.json', taskDataModified, 201, 'Task created successfully', res);
        } else {
            const message = taskValidator.validateTaskInfo(taskInfo).message;
            return res.status(400).json(message);
        }

    } catch(err) {
        res.status(500).json('Something went wrong');
    }
}

const updateTask = (req, res) => {
    try {
        const taskInfo = req.body;
        const taskId = req.params.id;
        let taskDataModified = taskData;

        const updateAtIndex = taskDataModified.tasks.findIndex(task => task.id == taskId);
        
        if(updateAtIndex == -1) {
            return res.status(404).json("Not Found");
        }
        if(taskValidator.validateTaskInfo(taskInfo).status === true) {
            taskDataModified.tasks[updateAtIndex] = { id: taskId, ...taskInfo};
            updateTaskData('./task.json', taskDataModified, 200, 'Task updated successfully', res);
        } else {
            const message = taskValidator.validateTaskInfo(taskInfo).message;
            return res.status(400).json(message);
        }
    } catch(err) {
        sendError(res)(e);
        res.status(500).json('Something went wrong');
    }
}

const deleteTask = (req, res) => {
    try {
        const taskId = req.params.id;
        let taskDataModified = taskData;
        const deleteAtIndex = taskDataModified.tasks.findIndex(task => task.id == taskId);

        if(deleteAtIndex != -1) {
            taskDataModified.tasks.splice(deleteAtIndex, 1);
            updateTaskData('./task.json', taskDataModified, 200, 'Task removed successfully', res);
        } else {
            return res.status(404).json("Task not found");
        }

    } catch(err) {
        res.status(500).json('Something went wrong');
    }
}

const getPriorityTask = (req, res) => {
    try {
        let priorityLevel = req.params.level;
        let filteredData = taskData.tasks.filter(task => task.priority == priorityLevel);
        if(filteredData.length) {
            return res.status(200).json(filteredData);
        } else {
            return res.status(404).json("Task not found");
        }
        
    }catch(err) {
        return res.status(500).json("error", err);
    }
}

module.exports = {
    getAlltasks : getAlltasks,
    getTask : getTask,
    createTask : createTask,
    updateTask : updateTask,
    deleteTask: deleteTask,
    getPriorityTask : getPriorityTask
}