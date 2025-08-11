//your JS code here. If required.
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById("password");
const checkboxEl = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');
const form = document.getElementById('loginForm');

const savedUser = localStorage.getItem('username');
const savedPass = localStorage.getItem('password');

if(savedUser && savedPass){
	existingBtn.style.display = 'inline-block';
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = usernameEl.value.trim();
	const password = passwordEl.value.trim();

	alert(`Logged in as ${username}`);
	if(checkboxEl.checked){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	if(localStorage.getItem('username') && localStorage.getItem('password')){
		existingBtn.style.display = 'inline-block';
	}else{
		existingBtn.style.display = 'none';
	}
})
existingBtn.addEventListener('click', () => {
	const storedUsername = localStorage.getItem('username');
	if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
   }
})