import { getTech, setTech } from "./database.js"

const techPackages = getTech()

document.addEventListener("change", event => {
    if (event.target.name === "tech") {
        setTech(parseInt(event.target.value))
    }
})

export const Tech = () => {
    let html = "<ul>"

    for (const teckPackage of techPackages) {
        html += `<li>
            <input type="radio" name="tech" value="${teckPackage.id}" /> ${teckPackage.packag}
        </li>`
    }

    html += "</ul>"
    return html
}