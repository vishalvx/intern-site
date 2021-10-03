//for server
import { fastify } from "fastify";
import fastifyStatic from "fastify-static";
import fastifyCors from "fastify-cors";
//for __dirname
import path from "path";
import { fileURLToPath } from "url";
//load env file
import "./env.js";
//js
import { connectDb } from "./db.js";
import { registerUser } from "./account/register.js";
import { loginUser } from "./account/login.js";

const __filename = fileURLToPath(import.meta.url);

//to Getting dir name from filename;
const __dirname = path.dirname(__filename);
const app = fastify();

const Port = process.env.PORT;
const startApp = async () => {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, "public"),
    });

    app.register(fastifyCors, {
      origin: [/\.localhost:8080/, "http://localhost:8080"],
      credentials: true,
    });

    app.post("/api/signup", {}, async (request, response) => {
      try {
        // console.log(request.body.firstname);
        const result = await registerUser(
          request.body.firstname,
          request.body.lastname,
          request.body.email,
          request.body.password,
          request.body.role
        );
        if (result.isLogin) {
          response.send(result.userData);
        } else {
          response.send("user Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    });
    app.post("/api/login", {}, async (request, respone) => {
      try {
        // console.log(request.body.role);
        const isLogin = await loginUser(
          request.body.email,
          request.body.password,
          request.body.role
        );
        // console.log(isLogin);
        respone.send(isLogin);
      } catch (error) {
        console.log(error);
      }
    });

    await app.listen(Port);
    console.log(`App is listenning on port ${Port}`);
  } catch (error) {
    console.log(error);
  }
};

connectDb().then(() => {
  startApp();
});
