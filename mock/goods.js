//因为本地mock没有数据库，在此模拟数据
let data =[
    {title:"vue单页面电商项目"},
    {title:"react单页面后台管理项目"}
]

export default {
    // 请求方法method  请求的地址url 返回对应的数据 与node编写的express是一样的
    // 获取商品的接口  function返回
    "get /api/goods" : function(req,res){
        setTimeout(()=>{ //模拟异步
            res.json({result:data}) //返回的结果
        },1000)
    }
}