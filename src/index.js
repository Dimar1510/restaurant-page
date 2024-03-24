import "./style.css";
import createPage from "./mainContent";

export default function createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

createPage();




