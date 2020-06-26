import axios from 'axios'
// umi3 history 代替  umi/router 
import { history } from 'umi'
import { notification } from 'antd'
// 定义state的初始状态
// getItem检测本地存储是否有信息
const inituserInfo = JSON.parse( localStorage.getItem("userinfo")) || {
    token:"",
    role:"",
    username:"",
    userimg:""

}

// api请求（登录的接口）  接口调用
function login(data){
    // 请求接口并将data(username,password)数据带过去
    return axios.post('/api/login',data)
}

export default {
    namespace: "user", //如不写namespace，命名空间会自动以此文件的文件名命名
    state: inituserInfo,//初始状态
    effects: {//异步操作
        // 星星函数  登录
        *login(action,{ put, call }){
            try {
                const res = yield call(login,action.payload)
                if(res.data.code == 0){
                    // 登录成功要把用户信息做缓存
                    localStorage.setItem("userinfo", JSON.stringify(res.data.data) )
                    yield put({ type:"init", payload: res.data.data })
                    history.push('/') //登录成功跳转到首页
                }
            } catch (error) {

                // alert('登录失败，账号或密码错误')
                notification.error({
                    message:"登录失败",
                    description:"登录账号或密码错误"
                })
            }
           
        },
        //退出登录功能
        *logout(action,{ put, call }){
            // 清除本地存储信息
            localStorage.removeItem("userinfo")
            yield put({type:"out"})
            history.push('/login')
        }
    },  
    reducers: {
        init(state,action){
            return action.payload
        },
        // 退出登录
        out(state,action){
            return inituserInfo
        }
    }

}