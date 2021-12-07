import { getWheels, setWheels } from "./database.js"

const wheelTypes = getWheels()

document.addEventListener("change", event => {
    if (event.target.name === "wheel") {
        setWheels(parseInt(event.target.value))
    }
})

export const Wheels = () => {
    let html = "<ul>"

    for (const wheel of wheelTypes) {
        html += `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.type}
        </li>`
    }

    html += "</ul>"
    return html
}