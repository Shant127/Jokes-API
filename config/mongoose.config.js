//import mongoose from our Node Modules folder since we installed the package
const mongoose = require("mongoose");

//connect to your database - we are putting in a variable that we define in server.js so we can change to different DBs
module.exports = (jokes) => {
    mongoose
        .connect(`mongodb://localhost/${jokes}`, 
        {
            useNewUrlParser : true,
            useUnifiedTopology: true,
        })
        .then( () => {
            console.log(`Successfully connected to database: ${jokes}`);
        })
        .catch( (err) => {
            console.log(err);
        });
}