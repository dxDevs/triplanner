//DB 데이터를 가져와야 함. Demo Data
import { destinations, getDestinationByName, templates, getTemplateById } from "./db"



const resolvers = {
    Query: {
        getAllDestinations:() => destination,
        getDestinationByName:(_, name) => getDestinationByName(name),
        getAllTemplates:() => templates,
        getTemplateById:(_, id) => getTemplateById(id),
    }
};

export default resolvers;