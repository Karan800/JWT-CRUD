const mongoose = require("mongoose")
const {MONGO_URI}=process.env

exports.connect = () =>{ mongoose.connect(MONGO_URI, // module export directly exports 
    {
    useNewUrlParser: true, 
    // we r trying to override old method string parser 
    useUnifiedTopology: true,
    // conn using mongo driver 
    })
.then(()=>{

    console.log("DB conn ");
} //fn defn 
)
.catch((err)=>{

    console.log(err);
})
}

//inside then fn def call back fn call is executed