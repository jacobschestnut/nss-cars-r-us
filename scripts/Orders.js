import { getColors, getInterior, getTech, getWheels, getOrders } from "./database.js"

const colors = getColors()
const interiors = getInterior()
const techs = getTech()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    // const totalCost = foundMetal.price + foundSize.price + foundStyle.price

    // const costString = totalCost.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD"
    // })

    return `<li>Order #${order.id} was placed on ${order.timestamp}</li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}