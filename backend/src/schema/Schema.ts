import { gql } from "apollo-server-express";

export const Schema = gql`
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