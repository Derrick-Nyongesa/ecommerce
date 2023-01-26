export const postDetailQuery = (productSlug) => {
  const query = `*[_type == "product" && slug.current == '${productSlug}'][0]']{
    _id,
     
      
  }`;
  return query;
};

export const userLikedPostsQuery = (userId) => {
  const query = `*[_type == 'product' && '${userId}' in likes[]._ref ] | order(_createdAt desc)`;
  return query;
};

export const singleUserQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;

  return query;
};
