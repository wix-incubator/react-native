var request = require("request")
var fs = require('fs');
var projectsData = require('../src/projects.json')

function updateProjects(projectsJson) {
    console.log(projecsJson)
    fs.writeFileSync('../src/projects.json', projectsJson);
}
        
projectsData.onlineProjectList.forEach(function(projectUrl){
    request({
    url: projectUrl,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
            if (((((((body.title) && (body.description)) && body.title) && body.github) && body.size) && body.name) && ((body.AndroidVideoUrl || body.IOSVideoUrl) || body.image)) {
                console.log('approved')
                projectsData.projectList.push(body.name)
                projectsData[body.name] = body
            } else {
                console.log('project not approved')
            }
        }
    })
})

updateProjects(projectsData)