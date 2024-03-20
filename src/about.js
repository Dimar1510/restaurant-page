import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'About';
    title.append(h1);
    return title;
}

export default function createAbout() {
    const page = createDiv('page-about');
    page.append(
        createTitle(),
    )
    return page;
}