This is the basic CRUD API implementation by following REST conventions . 
We memic the database by using the blogLis[] array . 
The server is created by using the express js framework . 

Steps to Run the project : 

Step1 ) Download the index.js File . 
Step2) Set up the basic node project by doing 
      > npm init
Step3) Install express framework 
    > npm i express
Step4) Install nodemon package for hot reloading 
   > npm i nodemon
Step5) Configure the nodemon by specifying the command in package.json file in the Scripts object
    Scripts {
      "start" : npx nodemon index.js 
  }
Step6) Install the body-parser package for reading the body parameters of the request.
   > npm i body-parser
Step7) Run the node project using
    > npx start
