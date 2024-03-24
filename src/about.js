import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'About us';
    title.append(h1);
    return title;
}

function createContent() {
    const content = createDiv('content-page');
    const p = document.createElement('p');
    const aboutImg = createDiv('about-img');
    p.innerHTML = '<span class="material-symbols-outlined"> lunch_dining </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt facilis eveniet. Exercitationem architecto, aliquid, minus libero maiores perspiciatis animi at sed praesentium doloremque quaerat assumenda! Blanditiis a tempora aperiam?<br><br><span class="material-symbols-outlined"> lunch_dining </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt facilis eveniet. Exercitationem architecto, aliquid, minus libero maiores perspiciatis animi at sed praesentium doloremque quaerat assumenda! Blanditiis a tempora aperiam?<br><br><span class="material-symbols-outlined"> lunch_dining </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt facilis eveniet. Exercitationem architecto, aliquid, minus libero maiores perspiciatis animi at sed praesentium doloremque quaerat assumenda! Blanditiis a tempora aperiam?'
    content.append(aboutImg, p);
    return content;
}



export default function createAbout() {
    const page = createDiv('page-about');
    page.append(
        createTitle(),
        createContent(),
    )
    return page;
}