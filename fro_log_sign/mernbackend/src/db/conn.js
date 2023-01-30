const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/frolificaUsers", {
    useNewUrlParser: true,
    
});try{
    console.log(`connection successful`);
}catch(e) {
    console.log(`no connection`);
}
