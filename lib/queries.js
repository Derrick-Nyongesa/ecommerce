export const postDetailQuery = (productSlug) => {
  const query = `*[_type == "product" && slug.current == '${productSlug}'][0]']{
    _id,
     
      
  }`;
  return query;
};
