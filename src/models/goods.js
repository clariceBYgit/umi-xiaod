
// models 可以看成是一个维护页面数据状态的对象
import axios from 'axios'

// 调接口，本应该写在servicer,此时演示放在model
function getGoods(){
    return axios.get('/api/goods')
}

export default {
    namespace: "goods", // model的命名空间，区分多个model ，若不写就与本文件名一致
    state: [], // 初始状态
    effects: {// 异步操作
        // 星星函数获取  sagas 
        *getList(action,{call,put}){
            const res = yield call(getGoods)
            yield put({type:'initGoods',payload:res.data.result})
        }
    },
    reducers: {
        initGoods(state,action){
            return action.payload
        },
        // 添加商品
        addGoods(state,action){
            return [...state,{title:action.payload.title}]
        }
    }
    };