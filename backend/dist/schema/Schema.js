"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.Schema = (0, apollo_server_express_1.gql) `
type VERB {
    id: ID!
    infinitive: String
    past: String
    pastParticiple: String
    translation: String
}

type Query {
    getAllVerbs: [VERB]
    getVerbById(id: String): VERB
}
`;
