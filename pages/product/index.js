import { client } from "../../lib/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = '*[_type == "product"]';

    const data = await client.fetch(query);

    res.status(200).json(data);
  }
}
