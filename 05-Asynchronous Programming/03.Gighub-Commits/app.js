function loadCommits() {
    const username = document.getElementById("username").value;
    const repoName = document.getElementById("repo").value;
    const listWithCommits = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username}/${repoName}/commits`

    const request = fetch(url);


    request.then(response =>{
        if(response.ok === false){
            throw `Error: ${response.status} (Not Found)`
        }
        return response.json();
    }).then(data => {
        data.forEach(c =>{
            console.log(c)
            let liElement = document.createElement('li');
            liElement.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            listWithCommits.appendChild(liElement);
        })
    }).catch(err =>{
        let liElement = document.createElement('li');
        liElement.textContent = err;
        listWithCommits.appendChild(liElement);
    })
}
