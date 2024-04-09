function loadRepos() {
	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	const reposList = document.getElementById('repos')
	const request = fetch(url);
	request.then(response =>{
		if (response.ok === false){
			throw (`${response.status}, ${response.statusText}`);
		}else{
			return  response.json()
		}

	}).then(data => {
			data.forEach(d =>{
				console.log(d)
				let username = d.full_name;
				let url = d.html_url;
				let liElement = document.createElement('li');
				let link = document.createElement('a');
				link.textContent = username;
				link.href = url;
				liElement.appendChild(link);
				reposList.appendChild(liElement);
			})
	}).catch(err =>{
		reposList.innerHTML = `<p>${err}</p>`
	})

}
