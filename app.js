const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoURL = "mongodb+srv://FbPatel:Fenil1998@cluster0.i4p5593.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURL,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to mongo DB");
}).catch(e=>console.log(e));

app.listen(5000, ()=>{
    console.log("server started");
})

require("./UserDetails");

const user = mongoose.model("user Info");

// app.post("/register", async(req,res)=>{
//     // const{name, psd} = req.body;
//     // console.log(req.body);
//     try {
//         await user.create({
//             uname: req.body.uname,
//             ps : req.body.ps,
//         });
//         res.send({status:ok})
//     } catch (error) {
//         res.send({status:"error"})
//     }
// })

app.post("/login", async(req, res)=>{
    const curUser = await user.findOne((req.body));

    if(!curUser){
        return res.json({status:"user not found"});
    }
    else if(req.body.ps == user.ps){
        return res.json({status: "success Login"})
    }

    else {
        return res.json({status: "success"})
    }
})