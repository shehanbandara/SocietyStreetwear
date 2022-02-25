const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sb19:sb19@societystreetwear.et4gv.mongodb.net/societystreetwear?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB Connection Successful!");
    } catch (error) {
        console.log(process.env.PORT);
        console.error("MongoDB Connection Failed!");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;