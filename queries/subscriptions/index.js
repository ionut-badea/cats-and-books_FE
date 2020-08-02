export const AddSubscriber = {
  mutation: `
    mutation AddSubscriber($subscriber:AddSubscriberInput!){
      addSubscriber(input: $subscriber){
        subscriber{
          name
          email
        }
      }
    }
  `,
};
