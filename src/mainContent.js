import createDiv from ".";
import createSidebar from "./sidebar";
import createHome from "./home";
import createContact from "./contact";
import createMenu from "./menu";
import createAbout from "./about";

function createMain() {
    const main = createDiv('main');
    main.append(createDiv('background'))
    main.append(
        createHome(),
        createMenu(),
        createAbout(),
        createContact(),
        );
    return main;
}

export default function createPage() {
    const content = document.querySelector('.content');
    content.append(createSidebar());
    content.append(createMain());
    
}