import { createEl, createImgLink } from "../utils/dom.js";
import aboutData from "../assets/data/about.json";
import img from "../assets/images/about.jpg";
import location from "../assets/images/adress.jpg";
import insta from "../assets/images/instagram.jpg";
import twitter from "../assets/images/x.jpg"

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
    const adressImg = createImgLink(location, "https://www.google.com/maps?hl=es&gl=es&um=1&ie=UTF-8&fb=1&sa=X&ftid=0xd5aabd6d28cc0b7:0x48ab033b37ec5dd3", "adress-link", "adress-img");
    const socialNetworks = createEl("div", { className: "social-networks", text: "Social Networks" });
    const instagram = createImgLink(insta, "https://www.instagram.com/", "insta-link", "social-img");
    const x = createImgLink(twitter, "https://x.com/?lang=es", "x-link", "social-img");
    socialNetworks.append(instagram, x);

    rightAbout.append(title, subtitle, text, adress, adressImg, socialNetworks);
    aboutContainer.append(leftAbout, rightAbout);
    content.appendChild(aboutContainer);
}