import { displayPost, checkAuth } from '../fetch-utils.js';
import { renderPostDetails } from '../render-utils.js';
//import { deletePost } from '../fetch-utils.js';

const displayPostContainer = document.querySelector('.post-detail-container');

const params = new URLSearchParams(window.location.search);

async function displayPostDetails() {
    const data = await displayPost(params.get('id'));
    console.log(data);
    const postDiv = renderPostDetails(data);
    displayPostContainer.append(postDiv);
    //const user = checkAuth();
    // if (user.id === data.uder_id) {
    //     const deleteButton = document.createElement('button');
    //     deleteButton.textContent = 'Delete Post';

    //     deleteButton.addEventListener('click', async () => {
    //         await deletePost(data.id);
    //         alert('This post has been deleted');
    //         location.replace('../');
    //     });

    //     displayPostContainer.append(deleteButton);
//    }

}

displayPostDetails();