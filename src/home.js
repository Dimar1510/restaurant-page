import createDiv from ".";

function createTitle() {
    const title = createDiv('title');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.textContent = 'Restaurant page';
    h2.textContent = 'Our restaurant is the bestaurant';
    title.append(h1, h2);
    return title;
}

function createLink() {
    const menuLink = createDiv('menu-link');
    const btn = document.createElement('button');
    btn.textContent = 'Check our menu';
    menuLink.append(btn);
    return menuLink;
}

export default function createHome() {
    const pageHome = createDiv('page-home');
    pageHome.classList.add('active')
    pageHome.append(
        createTitle(),
        createLink(),
    )
    return pageHome;
}