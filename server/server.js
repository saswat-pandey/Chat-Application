const path= require('path');
const express= require('express');
const port=process.env.PORT||5000;
const publicpath=path.join(__dirname,"../public");

console.log(publicpath);

const app=express();

app.use(express.static(publicpath));
app.post('/',(request,response)=>{

response.render("index.html")

});




app.listen(port,()=>{
  console.log(`Successfully connected to port:${port}`);
});
