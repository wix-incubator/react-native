var request = require("request")
var projectsData = require('../src/projects.json')

projectsData.onlineProjectList.forEach(function(projectUrl){
    request({
    url: projectUrl,
    json: true
    }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        if ((((((body.title) && (body.description)) && body.title) && body.github) && body.size) && ((body.AndroidVideoUrl || body.IOSVideoUrl) || body.image)) {
            console.log('approved')
            
        }
    }
})
})