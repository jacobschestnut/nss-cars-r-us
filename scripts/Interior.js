import { getInterior, setInterior } from "./database.js"

const interiorStyles = getInterior()

document.addEventListener("change", event => {
    if (event.target.name === "interior") {
        setInterior(parseInt(event.target.value))
    }
})

export const Interiors = () => {
    let html = "<ul>"

    for (const style of interiorStyles) {
        html += `<li>
            <input type="radio" name="interior" value="${style.id}" /> ${style.style}
        </li>`
    }

    html += "</ul>"
    return html
}