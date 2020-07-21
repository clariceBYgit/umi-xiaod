import styles from './goods.css';
import React, { Component } from 'react'
import { connect } from 'umi'
import { Card, Spin, Button } from 'antd'
@connect(
  state=>({
    goodsList:state.goods,  //获取指定的命名空间里面的state
    loading:state.loading  //通过loading命名空间拿到我们的加载状态
  }),
  {
    getList:()=>(
      {type:'goods/getList'}  //action的type是需要命名空间为前缀+我们的reducer
    ),
    addGoods:(title)=>(
      {type:'goods/addGoods',payload:{title}}
    )
  }
  
)

export default class extends Component {
  componentDidMount(){
    this.props.getList()
  }
  render() {
    // console.log(this.props.loading)
    return (
      <div>
        {/* <h1 className={styles.title}>Page goods</h1> */}
        {/* 商品列表 */}
        <div style={{position:"relative"}}>
          {
             this.props.loading.models.goods ? 
            <Spin className={styles.loadstatus} size='large' spinning={true}></Spin>
            :
            <div>
              {
               this.props.goodsList.map((good,index)=>{
              return <Card title={`课程${index+1}`} key={index}>
                  <div>
                    {good.title}
                  </div>
              </Card>
            })
            }
            <div>
              <Button type='primary' onClick={()=>this.props.addGoods("商品3"+new Date().getTime())}>添加商品
              </Button>
            </div>
            </div>
           
          }
        </div>
      </div>
    );
  }
}

