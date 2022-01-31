import { NextApiRequest, NextApiResponse } from "next";
import initMiddleware from "../../lib/init-middleware";
import Cors from "cors";
import {
  setupThreadClient,
  createDB,
  createCollection,
  auth,
  ProfileSchema,
  LinkSchema,
  UpvoteSchema,
} from "@/lib/db";
import { ThreadID } from "@textile/hub";

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST
    methods: ["GET", "POST"],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);
  if (req.method === "POST") {
    try {
      const { authorization } = req.headers;
      if (authorization === `Bearer ${process.env.API_KEY}`) {
        const userAuth = await auth({
          key: process.env.API_KEY || "",
          secret: process.env.API_SECRET || "",
        });
        const client = await setupThreadClient(userAuth);
        const threadList = await client.listDBs();
        const threadId = ThreadID.fromString(threadList[0].id);
          const posts = await client.find(threadId, "links", {});
          res.status(200).json(posts);
      } else {
        res
          .status(401)
          .json({ success: false, message: "Unauthorized access" });
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
