let repos=document.getElementById("my-github-projects")
const gitURL="https://gh-pinned-repos-5l2i19um3.vercel.app/?username=tchamalsha"

fetch(gitURL).then(function(response){
    return response.json();
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
    console.log(error)
})
function pushRepositories(repoName,repoURL,repoDescription,repoLanguage,repoStars,repoForks){
    let repoTemplate =`
        <div class="row">
            <div class="col-sm-12 justify-content-center d-flex">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${repoName}</h5>
                        <p class="card-text">${repoDescription}
                        </p>
                        <div class="git-icon">
                            <a href="${repoURL}">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    repos.innerHTML += repoTemplate
    
}
 