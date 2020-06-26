export default {
    "post /api/login":function(req,res){
        const { username, password} = req.body
        // console.log(req)
        if(username =='xiaod' && password == "111111"){
           return res.json({
                code:0,
                data:{
                    token:"xdclass",
                    role:"admin",
                    username:"小d",
                    userimg:"http://www.gx8899.com/uploads/allimg/2018042010/enei40gszt1.jpg"

                }
            })
        }
        if(username =='tim' && password =="222222"){
            return res.json({
                code:0,
                data:{
                    token:"xdclass",
                    role:"user",
                    username:"提姆",
                    userimg:"http://www.gx8899.com/uploads/allimg/2018031808/0ubakfmkpgy.jpg"

                }
            })
        }
        return res.status(401).json({ 
            code: -1,
            msg: "账号或密码错误"
        });
    }
}