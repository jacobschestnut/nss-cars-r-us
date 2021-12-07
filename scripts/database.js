const database = {

    paintColors: [
        {id: 1, color: "Silver"},
        {id: 2, color: "Midnight Blue"},
        {id: 3, color: "Firebrick Red"},
        {id: 4, color: "Spring Green"}
    ],

    interiorStyles: [
        {id: 1, style: "Beige Fabric"},
        {id: 2, style: "Charcoal Fabric"},
        {id: 3, style: "White Leather"},
        {id: 4, style: "Black Leather"}
    ],

    techPackages: [
        {id: 1, packag: "Basic Package"},
        {id: 2, packag: "Navigation Package"},
        {id: 3, packag: "Visibility Package"},
        {id: 4, packag: "Ultra Package"}
    ],

    wheelTypes: [
        {id: 1, type: "17-inch Pair Radial"},
        {id: 2, type: "17-inch Pair Black"},
        {id: 3, type: "18-inch Pair Spoke Silver"},
        {id: 4, type: "18-inch Pair Spoke Black"}
    ],

    carBuilder: {},

    customOrders: [
        {
            id:1
        }
    ]
}

export const getColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interiorStyles.map(style => ({...style}))
}

export const getTech = () => {
    return database.techPackages.map(packag => ({...packag}))
}

export const getWheels = () => {
    return database.wheelTypes.map(type => ({...type}))
}

export const getOrders = () => {
    return database.customOrders.map(order =>({...order}))
}

export const setColors = (id) => {
    database.carBuilder.colorId = id
}

export const setInterior = (id) => {
    database.carBuilder.interiorId = id
}

export const setTech = (id) => {
    database.carBuilder.techId = id
}

export const setWheels = (id) => {
    database.carBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.carBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.carBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
