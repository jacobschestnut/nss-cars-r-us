import { getColors, setColors } from "./database.js"

const colors = getColors()

document.addEventListener("change", event => {
    if (event.target.name === "color") {
        setColors(parseInt(event.target.value))
    }
})

export const Colors = () => {
    let html = "<ul>"

    for (const color of colors) {
        html += `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    }

    html += "</ul>"
    return html
}