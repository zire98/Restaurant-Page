import homeImg from "../assets/images/istockphoto-1473452859-612x612.jpg";
import { createEl } from "../utils/dom.js";

export default function createHome() {
    const content = document.querySelector("#content");

    const home = createEl("div", { className: "home" });

    const left = createEl("div", { className: "left-div" });
    const title = createEl("h2", { className: "title-home", text: "BEST BURGUERS IN GALAXY" });
    const description = createEl("p", { className: "description-home", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore doloribus, voluptas deleniti inventore vitae natus veritatis optio, hic obcaecati quae, illum ea corrupti unde labore." });
    const reserve = createEl("button", { className: "reserve", text: "BOOK A TABLE" });

    left.append(title, description, reserve);

    const right = createEl("div", { className: "right-div" });
    const homeImage = createEl("img", { className: "homeImage" });
    homeImage.src = homeImg;

    right.appendChild(homeImage);

    home.append(left, right);
    content.appendChild(home);
}