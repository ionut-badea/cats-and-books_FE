export const downloadTagArticlesBySlug = {
  query: `
    query TagArticlesBySlug($slug: String) {
      tags(slug: $slug){
        edges{
          node{
            id
            name
            articles{
              edges{
                node{
                  id
                  title
                  slug
                  author{
                    username
                  }
                  category{
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

export const downloadAllTags = {
  query: `
    query AllCategories {
      tags {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `,
};
