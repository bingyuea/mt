import React, { Component } from 'react'
import { List, InputItem, Button, DatePicker } from 'antd-mobile'
import { createForm } from 'rc-form'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import LocalStorage from '../utils'

class fillForm extends Component {
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
          checkInTime: moment().format('YYYY-MM-DD'),
          leaveTime: moment()
            .add('days', 1)
            .format('YYYY-MM-DD'),
          stay: '1',
          roomNum: '1',
          otherPrototype: ['大床', '', '含双早', '', '有wifi和宽带']
        },
        orderInfo: {
          person: '魏国庆',
          tel: '18738449939',
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

  componentDidMount = () => {
    let state =
      (LocalStorage.get('state') && LocalStorage.get('state').state) ||
      this.state.state
    // console.log(state)
    this.setState({
      state
    })
  }

  onSubmit = () => {
    this.handleOtherPrototype()
    setTimeout(() => {
      this.props.history.push({
        pathname: `/FormDetails`,
        query: {
          state: this.state
        }
      })
      LocalStorage.set('state', this.state)
    }, 300)
  }

  setStay = () => {
    // 算一下逗留几晚
    let { checkInTime, leaveTime } = this.state.state.roomType
    let a = moment(checkInTime).format('x')
    let b = moment(leaveTime).format('x')
    let date = Math.floor(Math.abs(a - b) / 86400000)
    this.setName('roomType', 'stay', date)
  }

  handleOtherPrototype = () => {
    let { otherPrototype } = this.state.state.roomType
    let state = this.state.state
    if (Array.isArray(otherPrototype)) {
      this.setName('roomType', 'otherPrototype', otherPrototype)
    } else {
      otherPrototype = otherPrototype.split(',')
      this.setName('roomType', 'otherPrototype', otherPrototype)
    }
    let state_order_time = moment(state.order.time).format(
      'YYYY-MM-DD HH:mm:ss'
    )
    this.setName('order', 'time', state_order_time)
    let state_roomType_checkInTime = moment(state.roomType.checkInTime).format(
      'YYYY-MM-DD'
    )
    this.setName('roomType', 'checkInTime', state_roomType_checkInTime)
    let state_roomType_leaveTime = moment(state.roomType.leaveTime).format(
      'YYYY-MM-DD'
    )
    this.setName('roomType', 'leaveTime', state_roomType_leaveTime)
    this.forceUpdate()
    setTimeout(() => console.log(this.state.state), 0)
  }
  setName = (objName, key, val) => {
    // 这个对象的合并
    let data = Object.assign({}, this.state.state[objName], { [key]: val })
    let data2 = Object.assign({}, this.state.state, { [objName]: data })
    // console.log(data)
    // console.log(data2)
    this.setState({
      state: data2
    })
  }

  render() {
    return (
      <div>
        <List renderHeader={() => '酒店信息'}>
          <InputItem
            clear
            value={this.state.state.hotel.name}
            onChange={date => this.setName('hotel', 'name', date)}
            placeholder="请填写酒店名称"
          >
            酒店名称
          </InputItem>
          <InputItem
            clear
            value={this.state.state.hotel.address}
            onChange={date => this.setName('hotel', 'address', date)}
            placeholder="请填写酒店地址"
          >
            酒店地址
          </InputItem>
        </List>

        <List renderHeader={() => '房间信息'}>
          <InputItem
            clear
            value={this.state.state.roomType.name}
            onChange={date => this.setName('roomType', 'name', date)}
            placeholder="请填写房间名称"
          >
            房间名称
          </InputItem>
          <DatePicker
            mode="date"
            title="请选择入住日期"
            value={new Date(this.state.state.roomType.checkInTime)}
            onChange={date => this.setName('roomType', 'checkInTime', date)}
          >
            <List.Item arrow="horizontal">入住日期</List.Item>
          </DatePicker>
          <DatePicker
            mode="date"
            title="请选择离开日期"
            value={new Date(this.state.state.roomType.leaveTime)}
            onChange={date => {
              this.setName('roomType', 'leaveTime', date)
              setTimeout(() => {
                this.setStay()
              }, 0)
            }}
          >
            <List.Item arrow="horizontal">离开日期</List.Item>
          </DatePicker>
          <InputItem
            type="number"
            value={this.state.state.roomType.stay}
            onChange={date => this.setName('roomType', 'stay', date)}
            placeholder="请输入逗留几晚"
          >
            逗留几晚
          </InputItem>
          <InputItem
            type="number"
            value={this.state.state.roomType.roomNum}
            onChange={date => this.setName('roomType', 'roomNum', date)}
            placeholder="请输入几间房"
          >
            几间房
          </InputItem>
          <InputItem
            clear
            value={this.state.state.roomType.otherPrototype}
            onChange={date => {
              this.setName('roomType', 'otherPrototype', date)
            }}
            placeholder="请填写房间属性"
          >
            房间属性
          </InputItem>
        </List>

        <List renderHeader={() => '预定信息'}>
          <InputItem
            clear
            value={this.state.state.orderInfo.person}
            onChange={date => this.setName('orderInfo', 'person', date)}
            placeholder="请填写订单人"
          >
            订单人
          </InputItem>

          <InputItem
            type="phone"
            value={this.state.state.orderInfo.tel}
            onChange={date => this.setName('orderInfo', 'tel', date)}
            placeholder="请填写手机号码"
          >
            手机号码
          </InputItem>

          <InputItem
            value={this.state.state.orderInfo.inTime}
            onChange={date => this.setName('orderInfo', 'inTime', date)}
            placeholder="请填写到店时间"
          >
            到店时间
          </InputItem>

          <InputItem
            value={this.state.state.orderInfo.inDes}
            onChange={date => this.setName('orderInfo', 'inDes', date)}
            placeholder="请填写商家入住"
          >
            商家时间
          </InputItem>

          <InputItem
            type="number"
            value={this.state.state.encourage.num}
            onChange={date => this.setName('encourage', 'num', date)}
            placeholder="请填写本单奖励"
          >
            本单奖励
          </InputItem>
        </List>

        <List renderHeader={() => '订单信息'}>
          <InputItem
            clear
            value={this.state.state.order.code}
            onChange={date => this.setName('order', 'code', date)}
            placeholder="请填写订单号"
          >
            订单号
          </InputItem>

          <DatePicker
            value={new Date(this.state.state.order.time)}
            onChange={date => this.setName('order', 'time', date)}
          >
            <List.Item arrow="horizontal">下单时间</List.Item>
          </DatePicker>
        </List>

        <List.Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>
            提交
          </Button>
        </List.Item>
      </div>
    )
  }
}
fillForm = createForm()(fillForm)
export default withRouter(fillForm)
