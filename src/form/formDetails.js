import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief
class FormDetails extends Component {
  constructor(params) {
    super()
    this.state = {
      hotel: {
        name: '雅文主题酒店',
        address: '汝阳县杜鹃大道与凤山南路交汇处南200米'
      },
      roomType: {
        name: '海景时尚蜗居房',
        checkInTime: '10-23',
        leaveTime: '10-24',
        stay: '1',
        roomNum: '1',
        otherPrototype: ['大床', '|', '含双早', '|', '有wifi和宽带']
      },
      orderInfo: {
        person: '魏国庆',
        tel: '18738449939',
        inTime: '10月23日',
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

  render() {
    return (
      <div className="formDetails">
        <Item multipleLine extra="查看商家" arrow="horizontal">
          {this.state.hotel.name}
          <Brief style={{ whiteSpace: 'normal', width: 'calc(100% - 65px)' }}>
            {this.state.hotel.address}
            {/* <div className="arrow">
              <i className="iconfont icon-jiantou" />
            </div> */}
          </Brief>
        </Item>
        <Item extra="查看房型" align="top" multipleLine arrow="horizontal">
          {this.state.roomType.name}
          <Brief style={{ color: '#333', whiteSpace: 'normal' }}>
            入住:
            <span>{this.state.roomType.checkInTime}</span>
            （今天） 离店：
            <span>{this.state.roomType.leaveTime}</span>
            （明天） 共<span>{this.state.roomType.stay}</span>晚
            <span>{this.state.roomType.roomNum}</span>间
          </Brief>
          <Brief>
            {this.state.roomType.otherPrototype.map((item, index) => {
              return (
                <span
                  className={index % 2 !== 0 ? 'verticalLine' : ''}
                  key={index}
                >
                  {item}
                </span>
              )
            })}
          </Brief>
        </Item>
        <div className="desBox">
          <div className="iconBox">
            <div className="left">
              <div className="iconText">
                <i className="iconfont icon-dingwei" />
                查看路线
              </div>
            </div>
            <div className="right">
              <div className="iconText">
                <i className="iconfont icon-002dianhua" />
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
              <div className="item-right">{this.state.orderInfo.person}</div>
            </li>
            <li className="item">
              <div className="item-left">联系手机</div>
              <div className="item-right">{this.state.orderInfo.tel}</div>
            </li>
            <li className="item">
              <div className="item-left">预计到店</div>
              <div className="item-right">
                <span>{this.state.orderInfo.inTime}</span>
                19:00之前（不影响酒店留房）
              </div>
            </li>
            <li className="item">
              <div className="item-left">入住说明</div>
              <div className="item-right">
                商家通常
                <span>{this.state.orderInfo.inDes}</span>
                开始办理入住，如需提早办理请联系商家
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
                <span>{this.state.encourage.num}</span>
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
              <div className="item-right">{this.state.order.code}</div>
            </li>
            <li className="item">
              <div className="item-left">下单时间</div>
              <div className="item-right">{this.state.order.time}</div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FormDetails
