window.onload = function () {
    generateHTML("HTML");
    const htmlOnload = document.getElementById("htmlbtn");
    htmlOnload.classList.add("active");
}

function generateHTML(category) {
    const filterResources = resources.filter(resource => resource.category === category);
    const sourceHTML = filterResources.map(resource =>
        `<h1>${resource.category}</h1>
        <p>${resource.text}</p>
        <ul>
            ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
        </ul>
        `);
    document.getElementById("main").innerHTML = sourceHTML.join('');
}

const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];
const buttonId = ["htmlbtn", "cssbtn", "javascriptbtn", "reactbtn", "sanitybtn"];
const buttons = buttonId.map(btnId => document.getElementById(btnId));

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        generateHTML(categories[index]);
    });
});  