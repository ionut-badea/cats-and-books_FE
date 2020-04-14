export const Articles = {
  query: `
    query Articles($articlesOnPage: Int, $nextPage: String, $title: String){
      articles(first: $articlesOnPage, after: $nextPage, title_Icontains: $title) {
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

export const Article = {
  query: `
    query Article($slug: String){
      articles(slug: $slug) {
        edges {
          node {
            uid
            author {
              username
            }
            title
            slug
            body
            category {
              name
            }
            tags {
              id
              name
            }
            published
          }
        }
      }
    }
  `
}

export const Comments = {
  query: `
    query Comments($slug: String){
      articles(slug: $slug) {
        edges {
          node {
            comments {
              id
              name
              body
              created
            }
          }
        }
      }
    }
  `
}

export const ArticlesByAuthor = {
  query: `
    query ArticlesByAuthor($author: ID) {
      articles(author: $author) {
        edges {
          node {
            id
            title
            slug
            category {
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

export const ArticlesByCategories = {
  query: `
    query ArticlesByCategories($category: ID) {
      articles(category: $category) {
        edges {
          node {
            id
            author {
              username
            }
            title
            tags {
              id
              name
            }
            published
          }
        }
      }
    }
  `
}

export const ArticlesByTag = {
  query: `
    query ArticlesByTag($tags: [ID]) {
      articles(tags: $tags) {
        edges {
          node {
            id
            author {
              username
            }
            title
            category{
              name
            }
            published
          }
        }
      }
    }
  `
}

export const AddComment = {
  mutation: `
    mutation AddComment($comment: AddCommentInput!) {
      addComment(input: $comment) {
        comment {
          body
          name
        }
      }
    }
  `
}
