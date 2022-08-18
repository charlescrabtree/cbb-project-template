import { displayPost, checkAuth } from '../fetch-utils.js';
import { renderPostDetails } from '../render-utils.js';
import { deletePost } from '../fetch-utils.js';

const displayPostContainer = document.querySelector('.post-detail-container');

const params = new URLSearchParams(window.location.search);

