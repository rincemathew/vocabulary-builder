//mongoosh setup
const mongoose = require("mongoose");

(async()=> {
    try{
        await mongoose.connect(process.env.MONGO_DB_CONNECT)
        console.log("mongodb is connected");
    }catch(error) {
        console.log("failed to connect")
        console.error(error.message);
    }
})();
// mongoose.connect(process.env.MONGO_DB_CONNECT)
// .then(()=>{
//     console.log("mongodb is connected");
// }).catch(()=>{
//     console.log("failed to connect");
// })


// module.exports = mongooseConnect