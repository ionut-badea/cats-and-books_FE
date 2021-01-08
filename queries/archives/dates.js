export const downloadArticlesByDate = {
  query: `
    query ArticleByDate($start_date: DateTime, $end_date: DateTime) {
      articles(published_Gt: $start_date, published_Lt: $end_date) {
        edges {
          node {
            id
            author {
              username
            }
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
  `,
};

export const downloadAllYears = {
  query: `
    query AllYaers {
      articles {
        edges {
          node {
            published
          }
        }
      }
    }
  `,
};
