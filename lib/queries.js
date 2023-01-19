export const topicPostsQuery = (category) => {
  const query = `*[_type == "post" && topic match '${category}*'] {
      _id,
       
    }`;

  return query;
};
