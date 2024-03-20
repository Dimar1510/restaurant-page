import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    title.append(h1);
    return title;
}

export default function createMenu() {
    const page = createDiv('page-menu');
    page.append(
        createTitle(),
    )
    return page;
}