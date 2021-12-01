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
        {id: 1, package: "Basic Package"},
        {id: 2, package: "Navigation Package"},
        {id: 3, package: "Visibility Package"},
        {id: 4, package: "Ultra Package"}
    ],

    wheelTypes: [
        {id: 1, type: "17-inch Pair Radial"},
        {id: 2, type: "17-inch Pair Black"},
        {id: 3, type: "18-inch Pair Spoke Silver"},
        {id: 4, type: "18-inch Pair Spoke Black"}
    ]
}

export const getColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInterior = () => {
    return database.interiorStyle.map(style => ({...style}))
}

export const getTech = () => {
    return database.techPackage.map(package => ({...package}))
}

export const getWheels = () => {
    return database.wheels.map(type => ({...type}))
}