export const Subscriber = {
  mutation: `
    mutation Subscriber($subscriber:AddSubscriberInput!){
      addSubscriber(input: $subscriber){
        subscriber{
          id
          name
          email
          terms
          status
        }
      }
    }
  `
}

export const Subscribers = {
  query: `
    query subscribers{
      subscribers{
        edges{
          node{
            id
            name
            email
            status
          }
        }
      }
    }
  `
}
