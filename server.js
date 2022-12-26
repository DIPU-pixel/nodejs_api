// creating a http server
const http = require("http");
const PORT = process.env.port || 5001;
const getReq =require("./method/get-req")
const postReq =require("./method/post-req");
const putReq = require("./method/put-req")
const deleteReq=require("./method/delete-req")

let movies =require("./data/movie.json")

const server = http.createServer((req, res) => {
   req.movies =movies
    switch (req.method) {
        case 'GET':
            getReq(req, res)
            break;
        case 'POST':
            postReq(req, res)

            break;
        case 'PUT':
            putReq(req, res)

            break;
        case 'DELETE':
            deleteReq(req, res)

            break;

        default:
            req.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({ title: "No Data ", message: "route not found" }));
            res.end();
            break;
    }
});
server.listen(PORT, () => {
    console.log(`server start on port : ${PORT}`);
});
