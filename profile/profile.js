import { checkAuth, saveProfile, getProfile, signOutUser } from '../fetch-utils.js';

const formEl = document.getElementById('user-form');
const nameEl = document.getElementById('user-name');
const bioEl = document.getElementById('user-bio');
const button = document.getElementById('button');
const signOutLink = document.getElementById('sign-out-link');

const user = checkAuth();

signOutLink.addEventListener('click', signOutUser);

checkAuth();

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const name = data.get('user-name');
    const bio = data.get('user-bio');
    
    await saveProfile({
        id: user.id,
        user_name: name,
        bio: bio,
    });

    formEl.reset();

    displayProfile();
});

async function displayProfile() {
    const response = await getProfile(user.id);

    if (response) {
        nameEl.value = response.user_name;
        bioEl.value = response.bio;
        button.textContent = 'update';
    }
}

displayProfile();

checkAuth();
