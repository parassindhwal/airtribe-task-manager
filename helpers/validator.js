class taskValidator {
    static validateTaskInfo(taskInfo) {
        if(taskInfo.hasOwnProperty('title') && taskInfo.hasOwnProperty('description') && taskInfo.hasOwnProperty('completed')) {
            if(taskInfo.title.trim() === '') {
                return {
                    "status": false,
                    "message": "Title cannot be empty"
                }
            }
            if(taskInfo.description.trim() === '') {
                return {
                    "status": false,
                    "message": "Description cannot be empty"
                }
            } 
            if(taskInfo.hasOwnProperty('priority') && taskInfo.priority.trim() === '') {
                return {
                    "status": false,
                    "message": "Priority cannot be empty"
                }
            } 
            if(typeof taskInfo.completed !== "boolean") {
                return {
                    "status": false,
                    "message": "Completed status must be a boolean value"
                }
            }
            return {
                "status": true,
                "message": "validated successfully"
            }
        } else {
            return {
                "status": false,
                "message": "Invalid task Information"
            }
        }
    }
}

module.exports = taskValidator;