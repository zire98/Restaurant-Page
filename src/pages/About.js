import { createEl } from "../utils/dom.js";
import aboutData from "../assets/data/about.json";
import img from "../assets/images/about.jpg";
import location from "../assets/images/adress.jpg"

export default function createAbout() {
    const content = document.querySelector("#content");

    const aboutContainer = createEl("div", { className: "about" });
    const leftAbout = createEl("div", { className: "left-about" });
    const aboutImg = createEl("img", { className: "about-img" });
    aboutImg.src = img;
    leftAbout.appendChild(aboutImg);

    const rightAbout = createEl("div", { className: "right-about" });
    const title = createEl("h1", { className: "about-title", text: aboutData.title });
    const subtitle = createEl("h2", { className: "about-subtitle", text: aboutData.subtitle });
    const text = createEl("p", { className: "about-text", text: aboutData.text });
    const adress = createEl("p", { className: "about-text", text: aboutData.adress });
    const adressImg = createEl("img", { className: "adress-img" });
    adressImg.src = location;

    rightAbout.append(title, subtitle, text, adress, adressImg);
    aboutContainer.append(leftAbout, rightAbout);
    content.appendChild(aboutContainer);
}