export default function createMenu() {

    const title = createTitle("MENU");
    const drinksSection = createSection("DRINKS");
    const drinkArticle = createArticle("Coca Cola", "3$");
    const drinkArticleTwo = createArticle("Beer", "3$");
    const drinkArticleThree = createArticle("Water", "2$");
    const drinkArticleFour = createArticle("Wine", "6$");
}

function createTitle(name) {
    const title = document.createElement("h1");
    title.className = "menu-title";
    title.textContent = "name";

    return title;
}

function createArticle(name, price) {
    const article = document.createElement("article");
    article.className = "menu-article";

    const nameArticle = document.createElement("h4");
    nameArticle.textContent = name;

    const priceArticle = document.createElement("p");
    priceArticle.textContent = price;

    article.append(nameArticle, priceArticle);
    return article;
}

function createSection(name) {
    const section = document.createElement("section");
    section.className = "menu-section";
    section.textContent = name;
    return section;
}

