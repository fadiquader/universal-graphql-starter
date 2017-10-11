export default {
  Query: {
    me: (parent, args, context) => ({ id: 1, email: 'f@f.c' }),
    news: (parent, args, context) => [
      {
        title: 'sds',
        link: 'link',
        author: 'sd',
        pubDate: 'd',
        content: 'f',
      },
    ],
  },
  Mutation: {
    login: (parent, args, context) => ({ token: '' }),
  },
};
