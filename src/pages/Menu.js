import { createEl, completeMenu } from "../utils/dom.js";
import menuData from "../assets/data/menu.json";

export default function createMenu() {
    const content = document.querySelector("#content");
    const menuContainer = createEl("div", { className: "menu" });

    completeMenu(menuData, menuContainer);

    content.appendChild(menuContainer);
}



