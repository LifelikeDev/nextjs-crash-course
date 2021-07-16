import { articles } from "../../../data";

export default function articlesHandler(req, res) {
  res.status(200).json(articles);
}
