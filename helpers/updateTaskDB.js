const fs = require('fs');

function updateTaskData(path, data, successStatusCode, successMessage, response) {
    fs.writeFile(path, JSON.stringify(data), { encoding: 'utf8', flag: 'w' }, (err, data) => {
        if(err) {
            return response.status(500).json('Something went wrong');
        } else {
            return response.status(successStatusCode).json(successMessage)
        }
    })
}

module.exports = updateTaskData