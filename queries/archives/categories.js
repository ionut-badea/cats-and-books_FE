export const downloadCategoryArticlesBySlug = {
  query: `
    query CategoryArticlesBySlug($slug: String){
      categories(slug: $slug){
        edges{
          node{
            id
            name
            articles{
              id
              title
              slug
              author{
                id
                username
              }
              tags{
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
  `,
};

export const downloadAllCategories = {
  query: `
    query AllCategories{
      categories{
        edges{
          node{
            id
            name
            slug
          }
        }
      }
    }
  `,
};
