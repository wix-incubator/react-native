var request = require("request")
var fs = require('fs');
var projectsData = require('../src/projects.json')

function updateProjects(projectsJson) {
    fs.writeFileSync('src/finalProjects.json', projectsJson);
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
                console.log(projectsData)
                projectsData.projectList.push(body.name)
                console.log(projectsData)
                projectsData[body.name] = body
                console.log(projectsData)
                updateProjects(JSON.stringify(projectsData))
            } else {
                console.log('project not approved')
            }
        }
    })
})

