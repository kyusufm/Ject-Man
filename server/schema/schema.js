const { projects, clients } = require('../sampleData.js');


const {GraphQLObjectType} = require('graphql');

const ClientType = new GraphQLObjectType({
    name:'Client',
    fields: () => ({
        id: {type: GraphQLID}, 
        name: {type: GraphString}, 
        email: {type: GraphString}, 
        phone: {type: GraphString}, 

    })
});
