import createHome from "./pages/Home.js";
import createMenu from "./pages/Menu.js";
import createAbout from "./pages/About.js";
import { clearElement } from "./utils/dom.js";
import './styles.css';

function displayPage(page) {
    const content = document.querySelector("#content");
    content.className = page;
    clearElement(content);

    switch (page) {
        case "home-page":
            createHome();
            break;
        case "menu-page":
            createMenu();
            break;
        case "about-page":
            createAbout();
            break;
    }
}

const buttons = document.querySelectorAll("button");

function setActiveButton(page) {
    buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.page === page);
    });
}

function navigate(page) {
    displayPage(page);
    setActiveButton(page);
}

displayPage("home-page");
setActiveButton("home-page");

buttons.forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.page));
});


