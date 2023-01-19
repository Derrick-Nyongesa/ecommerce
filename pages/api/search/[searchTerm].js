import { searchPostsQuery } from "../../../utils/queries";
import { client } from "../../../lib/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { searchTerm } = req.query;

    const videosQuery = searchPostsQuery(searchTerm);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
