import { client } from "../../../lib/client";
import { userLikedPostsQuery, singleUserQuery } from "../../../lib/queries";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    const query = singleUserQuery(id);
    const userLikedProductsQuery = userLikedPostsQuery(id);

    const user = await client.fetch(query);
    const userLikedProducts = await client.fetch(userLikedProductsQuery);

    const data = { user: user[0], userLikedProducts };

    res.status(200).json(data);
  }
}
