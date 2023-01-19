import { topicPostsQuery } from "../../../lib/queries";
import { client } from "../../../lib/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;

    const videosQuery = topicPostsQuery(category);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
