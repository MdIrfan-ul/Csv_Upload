import {server} from "./app.js";
// const port = 3200;
server.listen(process.env.PORT);

console.log(`server is listening at http:localhost:${process.env.PORT}`)