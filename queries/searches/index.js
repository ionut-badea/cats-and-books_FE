export const downloadSearchResultsByTitle = {
  query: `
    query SearchResultsByTitle($title: String){
      articles(title_Icontains: $title) {
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
            }
            tags {
              id
              name
            }
            draft
            published
          }
        }
      }
    }
  `
}

export const downloadSearchByBody = {
  query: `

  `
}

export const downloadearchByAbstract = {
  query: `

  `
}
