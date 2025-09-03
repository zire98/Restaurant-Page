import homeImg from "../assets/istockphoto-1473452859-612x612.jpg";

export default function createHome() {
    const content = document.querySelector("#content");
    const home = document.createElement("div");
    home.className = "home";

    const left = document.createElement("div");
    left.className = "left-div";
    const title = document.createElement("h2");
    title.className = "title-home";
    title.textContent = "BEST BURGUERS IN GALAXY";
    const description = document.createElement("p");
    description.className = "description-home";
    description.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore doloribus, voluptas deleniti inventore vitae natus veritatis optio, hic obcaecati quae, illum ea corrupti unde labore."
    const reserve = document.createElement("button");
    reserve.className = "reserve";
    reserve.textContent = "BOOK A TABLE";
    left.append(title, description, reserve);

    const right = document.createElement("div");
    right.className = "right-div";
    const homeImage = document.createElement("img");
    homeImage.src = homeImg;
    homeImage.className = "homeImage";
    right.appendChild(homeImage);

    home.append(left, right);
    content.appendChild(home);


}