const destinations = [
    {
        name: "Osaka",
        country: "Japan"
    },
    {
        name: "Sapporo",
        country: "Japan"
    }
]

const templates = [
    {
        id: 1,
        name: "Osaka",
        country: "Japan",
        price: 3840000
    },
    {
        id: 2,
        name: "Sapporo",
        country: "Japan",
        price: 3840000
    }
]

const getDestinationByName = name =>
{
    const filteredDestination = destinations.filter(obj => name === obj.name);
    return filteredDestination[0];
}

const getTemplatesById = name =>
{
    const filteredDestination = destinations.filter(obj => name === obj.name);
    return filteredDestination[0];
}