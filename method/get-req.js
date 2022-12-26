
module.exports =(req,res)=>{
    console.log(req.url);
    let baseUrl=req.url.substring(0,req.url.lastIndexOf("/")+1)
    if(req.url === "/api/movies"){
        res.statusCode =200;
        res.setHeader("content-type","application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }else{
        res.writeHead(404,{"content-type":"application/json"});
        res.write(JSON.stringify({ title: "No Data ", message: "route not found" }));

    }
}