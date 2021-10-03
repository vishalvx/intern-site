import { client } from "../db.js";

export const user = client.db("internsite").collection("user");
