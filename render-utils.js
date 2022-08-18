export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const li = document.createElement('li');
        li.classList.add('post-it');

        const a = document.createElement('a');
        a.href = `./post/?id=${post.id}`;

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        
        a.append(titleEl, categoryEl, descriptionEl, contactEl);
        li.append(a);
        fragment.append(li);
    }

    return fragment;
}

export function renderPostDetails(post) {
    const container = document.createElement('div');
    const postTitle = document.createElement('h2');
    const catSpan = document.createElement('span');
    const descriptionEl = document.createElement('p');
    const contactEl = document.createElement('p');

    postTitle.textContent = post.title;
    catSpan.textContent = post.category_id;
    descriptionEl.textContent = post.description;
    contactEl.textContent = post.contact;

    container.append(postTitle, catSpan, descriptionEl, contactEl);

    return container;
}