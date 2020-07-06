export const downloadAllComments = {
  query: `
    query AllComments($slug: String){
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
