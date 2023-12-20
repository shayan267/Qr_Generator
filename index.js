//  const fs = require("fs");

// fs.writeFile("message.txt","hello from node JS", (err)=>{
//     if (err) throw err;
//     console.log("SUCCESSFULL");

// });
// fs.readFile("./message.txt","utf8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// import superheroes from "superheroes";
// const Myname = superheroes.random();
// console.log("I am "+ Myname);



import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "Type your URL",
     name : "URL"},
  ])
  .then((answers) => {
   const url = answers.URL;
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// import express from " express";
// const app = express();
// const port = 3000;
// app.listen(port, () =>{
//     console.log("server running on "+ port );
// });
