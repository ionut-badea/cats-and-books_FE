export const auth = {
  mutation: `
    mutation authentication($credentials: ObtainJSONWebTokenInput!){
      auth(input: $credentials){
        token
        refreshToken
      }
    }
  `
}

export const refresh = {
  mutation: `
    mutation refresh($refreshToken: RefreshInput!){
      refresh(input: $refreshToken){
        token
        refreshToken
      }
    }
  `
}

export const userInfo = {
  query: `
    query user($user:ID!){
      user(id:$user){
        username
        firstName
        lastName
        bio
        avatar
      }
    }
  `
}
