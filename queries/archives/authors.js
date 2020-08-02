export const downloadAuthorArticlesByUsername = {
  query: `
    query AuthorArticlesByUsername($username: String) {
      users(username: $username) {
        edges {
          node {
            id
            username
            articles {
              edges {
                node {
                  id
                  title
                  slug
                  category {
                    id
                    name
                    slug
                  }
                  tags {
                    id
                    name
                    slug
                  }
                  published
                }
              }
            }
          }
        }
      }
    }
  `,
};

export const downloadAllAuthors = {
  query: `
    query AllAuthors {
      users {
        edges{
          node{
            id
            username
            firstName
            lastName
          }
        }
      }
    }
  `,
};
