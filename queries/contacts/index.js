export const AddMessage = {
  mutation: `
    mutation AddMessage($input: AddMessageInput!){
      addMessage(input: $input){
        message{
          id
          name
          email
          body
          terms
        }
      }
    }
  `,
};
