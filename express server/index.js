import express from "express";
const app = express();
const port = 3000;
app.listen(port, () =>{
    console.log("server running on "+ port );
app.get("/", (req,res)=>{
    res.send("HEY BRO !UP");
});
app.get("/about", (req,res)=>{
    res.send("its me shayan");

});
});

