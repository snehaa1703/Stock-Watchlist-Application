exports.signup = (req,res)=>{
    console.log(req.body);

    res.json({
        message:"Data received"
    });
};