import React from 'react'
import {Menu, Dropdown} from 'antd'
import './index.less'
import { Cookie } from 'utils/storage'
const Item = Menu.Item
const menu = () => (
    <Menu>
        <Item>{'admin'}</Item>
        <Item><a href="https://github.com/chenxiangdashen">Github</a></Item>
        <Item><span onClick={e => {
            Cookie.remove('Auth_Token')

        }}>退出</span></Item>
    </Menu>
)

export default class Account extends React.Component {
    render () {
        return (
            <div className="account_wrapper">
                <Dropdown overlay={menu()} placement="bottomLeft">
                    <div className="avatar bg-cover-all"></div> 
                </Dropdown>
            </div>
        )
    }
}