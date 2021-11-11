import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    projects: [Project]
  }

  type Project {
    id: ID!
    name: String
    image: String
    slug: String
  }
`;

export default typeDefs;
