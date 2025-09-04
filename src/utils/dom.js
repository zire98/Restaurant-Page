export function createEl(type, { className, text }) {
    const element = document.createElement(type);

    if (className) element.className = className;
    if (text) element.textContent = text;

    return element;
}

function createArticle(name, description, price, image) {
    const article = createEl("article", { className: "menu-article" });
    const nameEl = createEl("h4", { className: "article-name", text: name });
    const descriptionEl = createEl("p", { className: "article-description", text: description });
    const priceEl = createEl("p", { className: "article-price", text: price });
    const imageEl = createEl("img", { className: "article-image" });
    imageEl.src = image;

    article.append(nameEl, descriptionEl, priceEl, imageEl);

    return article;
}

export function completeMenu(menu, container) {
    Object.entries(menu).forEach(([category, items]) => {
        const section = createEl("section", { className: "menu-section" });
        const subTitle = createEl("h2", { className: "menu-subTitle", text: titleize(category) });
        section.appendChild(subTitle);

        items.forEach(item => {
            const el = createArticle(item.name, item.description, item.price, item.image);
            section.appendChild(el);
        });

        container.appendChild(section);
    });
}

function titleize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}