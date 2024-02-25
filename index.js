const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

 // memic the db using the array 

 //before accessing the api , the request will hit the below layer ie middleware
app.use(bodyParser.urlencoded({extended:true})); // to read using query string library , we put extended as true
app.use(bodyParser.json()) // parses the data to json , but still unable to read

let blogList=[];

app.get("/blogs",(req,res)=>{
    res.status(200).json({
        data: blogList,
        success: true
    }); 

})

app.get("/blogs/:id",(req,res)=>{  // to get the unique blog , :id represents that id is variable parameter/value
        console.log(req.params);    // whatever the name after the colon :  is the paramter name , and the
        const result = blogList.filter(
            (blog)=> {return blog.id==req.params.id}
                            
            );

        return res.status(200).json(  // paramter value that you pass in the request after /blogs/
                                        // is the value of that paramter  ex : /blogs/3 then 
            {                           // req.params --->  {id:3}
                    data : result,
                    sucess: true
            }
        )
})
app.post("/blogs",(req,res)=>{
    //console.log(req.body);
    blogList.push({title:req.body.title,
                   content:req.body.content,
                   id: Math.floor(Math.random()*1000)
                  
                });
    //console.log(blogList);
    return res.status(201).json({success:true});

})
app.listen(PORT,()=>{
    console.log("Server is running at port ",PORT);
})


/*
    concept of hot Reloading:
        Whenver we do changes in a file , server wont restart . We have to restart 
    it manually . So There is a package which restarts the server upon detecting 
    file changes ie nodemon package.
      To install nodemon
        > node i nodemon 
    -> Os dont know about the nodemon package . So to run using nodemon 
    we need to use the npx[node package executor] ( that runs the npm packages )
        ex: npx nodemon index.js
    -> We can even specify the above commond in the scripts object in package.json 
    file . like 
        "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon index.js" 
            }
    After that , we just need to run like 
            > npm start 

    ----------------------------------------------
    Configuration of body-parser using middlewares

    Middleware is a layer which is used to check the correctness/to modify the  
    date before hitting the API. 
*/
