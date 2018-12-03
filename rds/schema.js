const schema = `
type Destination
{
    name: String!
    country: String!
}

type Template
{
    id: Int!
    name: String!
    country: String!
    price: Int!
}

type User
{
    id: String!
    name: String!
    follows():Template!
}

type Query {
    getAllDestinations: [Destination]!
    getDestinationByName(name: String!): Destination!
    getAllTemplates: [Template]!
    getTemplateById(id: Int!): Template!
    getUserInfo(id: String!): User!
}`;

export { schema };

