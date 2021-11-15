import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    projects(deployed: Boolean, network: String): [Project]
    project(id: String): Project
    filterProjectByName(name: String): [Project]
  }

  type Mutation {
    createIndexer(name: String!, description: String, repo_url: String!, website_url: String!, image: String): Project
    deployProject(id: String!): Project
  }

  type Project {
    id: ID!
    name: String
    image: String
    slug: String
    icon: String
    repo_url: String
    website_url: String
    description: String
    deployed: Boolean
    network: String
  }
`;

export default typeDefs;
