  const fs = require("fs");
  const express = require("express");
  const cors = require("cors");
  const app = express();
  app.use(express.json());

  app.listen(3000);
  
app.get("/",(req,res)=>{
  res.json({
    "Message":"Api started Successfully!! > Try Different EndPoints by changing url",
    "Retrive Textfiles endpoint":"/getalltextfiles",
    "To Create Newfile endpoint- try in postman":"/createnewfile"
  })
})
  app.get("/getalltextfiles", (req, res) => {
    fs.readdir("./files", (err, data) => {
      if (err) {
        console.error("Error reading directory:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      const allfiles = data.filter((file) => file.endsWith(".txt"));

      res.json({
        message: "File retrived Successfully",
        allfiles: allfiles,
      });
    });
  });

  app.post("/createnewfile", (req, res) => {
    let date = new Date();
    let fileName = `${date.getFullYear()}-${(
      date.getMonth() + 1
    ).toString()}-${date.getDate()}-${date.getHours()}hrs-${date.getMinutes()}mins-${date.getSeconds()}secs`;
    fs.writeFile(`./files/${fileName.toString()}.txt`, `${date}`, "utf8", (err) => {
      if (err) {
        console.error("Error creating file:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({
        message: "File Created Successfully",
      });
    });
  });
