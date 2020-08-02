export const downloadPublishedDates = {
  query: `
    query PublishedDates{
      articles{
        edges{
          node{
            published
          }
        }
      }
    }
  `,
};
