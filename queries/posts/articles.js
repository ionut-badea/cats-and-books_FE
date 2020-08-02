export const downloadArticleBySlug = {
  query: `
    query ArticleBySlug($slug: String){
      articles(slug: $slug) {
        edges {
          node {
            id
            uid
            author {
              username
            }
            title
            slug
            body
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
  `,
};

export const downloadAllArticles = {
  query: `
    query AllArticles($articlesOnPage: Int, $nextPage: String){
      articles(first: $articlesOnPage, after: $nextPage) {
        pageInfo{
          startCursor
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            author {
              username
            }
            title
            slug
            abstract
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
            draft
            published
          }
        }
      }
    }
  `,
};
