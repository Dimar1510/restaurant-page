import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    title.append(h1);
    return title;
}

function createContent() {
    const content = createDiv('content-page');
    const specials = document.createElement('h2');
    specials.textContent = 'Try our specials today!';
    content.append(
        specials,
        createMenuGrid(),
    )
    return content;
}

function createMenuGrid() {
    const menuGrid = createDiv('res-menu');
    
    for (let i = 0; i < 6; i++) {
        menuGrid.append(
            createMenuItem()
        )
    }

    return menuGrid;
}

function createMenuItem() {
    const item = createDiv('item');
    const h = document.createElement('h3');
    h.classList.add('food-title');
    h.innerHTML = '<span class="material-symbols-outlined"> restaurant_menu </span> special dish';
    const itemImg = createDiv('item-img');
    itemImg.innerHTML = ''
    const p = document.createElement('p');
    p.innerText = 'a comprehensive list of ingridients in this dish';
    item.append (h, itemImg, p);
    return item;
}

export default function createMenu() {
    const page = createDiv('page-menu');
    page.append(
        createTitle(),
        createContent(),
    )
    return page;
}