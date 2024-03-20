import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contacts';
    title.append(h1);
    return title;
}

export default function createContact() {
    const page = createDiv('page-contact');
    page.append(
        createTitle(),
    )
    return page;
}