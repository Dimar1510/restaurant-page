import createDiv from ".";

function createSidebarLogo() {
    const sidebarLogo = createDiv('sidebar-logo');
    const logoImg = createDiv('logo-img');
    logoImg.innerHTML = '<span class="material-symbols-outlined"> lunch_dining </span>'
    sidebarLogo.appendChild(logoImg);
    return sidebarLogo;
}

function createSidebarMenu() {
    const sidebarMenu = createDiv('sidebar-menu');
    const ul = document.createElement('ul');
    const itemHome = document.createElement('li');
    const itemMenu = document.createElement('li');
    const itemAbout = document.createElement('li');
    const itemContact = document.createElement('li');
    itemHome.textContent = 'Home';
    itemHome.id = 'home';
    itemHome.onclick = () => openPage('home');
    itemHome.classList.add('active');
    itemMenu.textContent = 'Menu';
    itemMenu.id = 'menu';
    itemMenu.onclick = () => openPage('menu');
    itemAbout.textContent = 'About';
    itemAbout.id = 'about';
    itemAbout.onclick = () => openPage('about');
    itemContact.textContent = 'Contact';
    itemContact.id = 'contact'
    itemContact.onclick = () => openPage('contact');

    ul.append(itemHome, itemMenu, itemAbout, itemContact);
    sidebarMenu.appendChild(ul);
    return sidebarMenu;
}

function createSidebarBtn() {
    const sidebarBtn = createDiv('sidebar-button');
    const btn = document.createElement('button');
    btn.textContent = 'Order online';
    sidebarBtn.append(btn);
    return sidebarBtn;
}

function createSidebarInfo() {
    const sidebarInfo = createDiv('sidebar-info');
    const adress = createDiv('adress');
    const tel = createDiv('tel');
    adress.innerHTML= '1234 ELM ST, <br> NEW YORK, NY 123456, USA';
    tel.innerHTML = '(123)456-7890';
    sidebarInfo.append(adress, tel);
    return sidebarInfo;
}

function openPage(page) {
    const currentPage = document.querySelector('.main > .active');
    currentPage.classList.remove('active')
    const currentItem = document.querySelector('.sidebar-menu .active');
    currentItem.classList.remove('active');
    const newPage = document.querySelector(`.page-${page}`);
    newPage.classList.add('active');
    const newItem = document.getElementById(page);
    newItem.classList.add('active');
}

export default function createSidebar() {
    const sidebar = createDiv('sidebar');
    sidebar.append(
        createSidebarLogo(),
        createSidebarMenu(),
        createSidebarBtn(),
        createSidebarInfo(),
    );
    return sidebar;
}

export {openPage}