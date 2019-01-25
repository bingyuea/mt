import React,{ Component } from 'react'
import { List } from 'antd-mobile'
import moment from 'moment'

const Item = List.Item
const Brief = Item.Brief

class FormDetails
  extends Component{
  constructor(params) {
    super()
    this.state = {
      state: {
        hotel: {
          name: '雅文主题酒店',
          address: '汝阳县杜鹃大道与凤山南路交汇处南200米'
        },
        roomType: {
          name: '海景时尚蜗居房',
          checkInTime: '2018-10-23',
          leaveTime: '2018-10-24',
          stay: '1',
          roomNum: '1',
          otherPrototype: [ '大床','','含双早','','有wifi和宽带' ]
        },
        orderInfo: {
          person: '',
          tel: '',
          inTime: '19:00',
          inDes: '14:00'
        },
        encourage: {
          num: '55'
        },
        order: {
          code: '927537252',
          time: '2018-10-23 17:48'
        }
      }
    }
  }
  
  componentDidMount() {
    let queryState =
      this.props.location.query && this.props.location.query.state
    console.log(queryState)
    
    if (queryState) {
      this.setState({
        state: queryState.state
      })
    } else {
      this.props.history.push({
        pathname: `/FillForm`
      })
    }
  }
  
  handleClick = () => {
    this.props.history.push({
      pathname: `/FillForm`
    })
  }
  
  render() {
    return (
      <div className="formDetails">
        <div className="header_title">
          <div className="left_arrow" onClick={this.handleClick}>
            <i className="iconfont icon-fanhui"/>
          </div>
          <div className="center_title">待评价</div>
        </div>
        <Item multipleLine extra="查看商家" arrow="horizontal">
          {this.state.state.hotel.name}
          <Brief style={{
            whiteSpace: 'normal',
            width: 'calc(100% - 65px)'
          }}>
            {this.state.state.hotel.address}
            {/* <div className="arrow">
             <i className="iconfont icon-jiantou" />
             </div> */}
          </Brief>
        </Item>
        <Item extra="查看房型" align="top" multipleLine arrow="horizontal">
          {this.state.state.roomType.name}
          <Brief>
            {Array.isArray(this.state.state.roomType.otherPrototype)
              ? this.state.state.roomType.otherPrototype.map((item,index) => {
                return index%2 !== 0 ? (
                  <span className="verticalLine" key={index}>
                      |
                    </span>
                ) : (
                  <span key={index}>{item}</span>
                )
              })
              : this.state.state.roomType.otherPrototype
                .split(',')
                .map((item,index) => {
                  return index%2 !== 0 ? (
                    <span className="verticalLine" key={index}>
                        |
                      </span>
                  ) : (
                    <span key={index}>{item}</span>
                  )
                })}
          </Brief>
          <Brief style={{
            color: '#333',
            whiteSpace: 'normal'
          }}>
            入住:
            <span>
              {moment(this.state.state.roomType.checkInTime).format('MM-DD')}
            </span>
            （今天） 离店：
            <span>
              {moment(this.state.state.roomType.leaveTime).format('MM-DD')}
            </span>
            （明天） 共<span>{this.state.state.roomType.stay}</span>晚
            <span>{this.state.state.roomType.roomNum}</span>间
          </Brief>
        </Item>
        <div className="desBox">
          <div className="iconBox">
            <div className="left">
              <div className="iconText">
                <i className="iconfont icon-dingwei"/>
                查看路线
              </div>
            </div>
            <div className="right">
              <div className="iconText">
                <i className="iconfont icon-002dianhua"/>
                联系商家
              </div>
            </div>
          </div>
        </div>
        
        <div className="box">
          <div className="title">预定信息</div>
          <ul className="list">
            <li className="item">
              <div className="item-left">入住人</div>
              <div className="item-right">
                {this.state.state.orderInfo.person}
              </div>
            </li>
            <li className="item">
              <div className="item-left">联系手机</div>
              <div className="item-right">{this.state.state.orderInfo.tel}</div>
            </li>
            <li className="item">
              <div className="item-left">预计到店</div>
              <div className="item-right">
                <span>
                  {moment(this.state.state.roomType.checkInTime).format(
                    'MM月DD日'
                  )}
                </span>
                <span>{this.state.state.orderInfo.inTime}</span>
                之前（不影响酒店留房）
              </div>
            </li>
            <li className="item">
              <div className="item-left">入住说明</div>
              <div className="item-right">
                商家通常
                <span>{this.state.state.orderInfo.inDes}</span>
                开始办理入住，如需提早办理请联系商家
              </div>
            </li>
          </ul>
        </div>
        
        <div className="box no-border">
          <ul className="list" style={{ paddingTop: "15px" }}>
            <li className="item">
              <div className="item-left">发票</div>
              <div className="item-right">
                如需发票，请向酒店前台索取
              </div>
            </li>
          </ul>
        </div>
        
        <div className="box no-border">
          <div className="title">本单可享</div>
          <ul className="list">
            <li className="item">
              <div className="item-left">美团瓜籽</div>
              <div className="item-right">
                消费后预计获取
                <span>{this.state.state.encourage.num}</span>
                美团瓜籽（离店次日到账）
              </div>
            </li>
          </ul>
        </div>
        
        <div className="box border-top">
          <div className="title">订单信息</div>
          <ul className="list">
            <li className="item">
              <div className="item-left">订单号</div>
              <div className="item-right">{this.state.state.order.code}</div>
            </li>
            <li className="item">
              <div className="item-left">下单时间</div>
              <div className="item-right">
                {moment(this.state.state.order.time).format('YYYY-MM-DD HH:mm')}
              </div>
            </li>
          </ul>
        </div>
        
        <div className="goldImg">
          <img src={require("../img/gold.jpg")} alt=""/>
        </div>
      </div>
    )
  }
}

export default FormDetails
