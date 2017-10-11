export default `
  type User {
    id: Int!
    email: String
  }
  type NewsItem {
    title: String!
    link: String!
    author: String
    pubDate: String!
    content: String
  }
  
  type Query {
    me: User!
    news: [NewsItem]!
  }
  
  type AuthPayload {
    token: String!
  }
  
  type Mutation {
    login(email: String!, password: String!): AuthPayload!
  }
  
`;
