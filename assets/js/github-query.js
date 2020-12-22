let repos=document.getElementById("my-github-projects")
const gitURL="https://gh-pinned-repos-5l2i19um3.vercel.app/?username=tchamalsha"

fetch(gitURL).then(function(response){
    return response.json;
}).then(function(object){
    data = object

    data.forEach(element => {
        repo = element.repo
        url = element.link
        description = element.description
        language = element.language
        stars =element.stars
        forks = element.forks

        pushRepositories(repo,url,description,language,stars,forks)

    })
}).catch(function(error){
    alert("Something went wrong!!")
    console.error(error)
})
function pushRepositories(repoName,repoURL,repoDescription,repoLanguage,repoStars,repoForks){
    let repoTemplate =
    
}
 