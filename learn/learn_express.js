// as jquery is used in js for the bettwe and easy writing of code , express does the same for node js

// step 1:  create a new directory express server
// step 2: create a new js file
// step 3: initialise npm using npm init
// step 4: now follow npm instructions on terminal
// step 5: npm install express to download express dependencies on to the server
const express = require("express"); // this allows express in the code
const app = express();
app.listen(8000, function(){ // keep port 3000
    console.log("hi dinesh");                  // basic demo on starting server 
})
// step 6: write above code in ne file created in step 2
// step 7: run the code in terminal >> node (new file name no bracket);
// step 8: http://localhost:8000 login to this url to view our server
// step 9: to start the server instead of using node server.js we can user nodemon server.js this doesnt need to restart the server everytime when there are any chnages in the source code