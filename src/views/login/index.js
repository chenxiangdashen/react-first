import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import {Local} from "utils/storage";
import './index.less'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import actions from 'src/actions'

// import connect from '../../utils/connect'／
const FormItem = Form.Item

const users = [
    {
        userName: 'admin',
        password: '123456',
        roles: ['admin', 'editor'],
        Auth_Token: 'admin'
    },
    {
        userName: 'editor',
        password: '123456',
        roles: ['editor'],
        Auth_Token: 'editor'
    }
]

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        let {form, actions} = this.props
        console.log(actions)
        console.log(this.context)

        form.validateFields(async (err, values) => {
            if (err) {
                message.error(err)
                return
            }
            let { userName, password, remember } = values, user

            try {
                user = await actions.loginUser({userName, password})
            } catch (e) {
                message.error(e)
                return
            }
            this.props.history.push(Local.get('currPath') || '/')
        })
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form
        return (
            <div className="login_wrapper df-c">
                <div className="login_box">
                    <h1>后台管理系统</h1>
                    <Form onSubmit={this.handleSubmit} className="login_form">
                        <FormItem className="form_item">
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入您的用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem className="form_item">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入您的密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem className="form_item">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox className="fl">记住我</Checkbox>
                            )}
                            <a className="fr" href="javascript:;">忘记密码</a>
                        </FormItem>
                        <Button type="primary" htmlType="submit" className="submit">Log in</Button>
                        <FormItem style={{marginBottom: 0}}>
                            <pre style={{lineHeight: '25px'}}>Username: admin      Password: 123456</pre>
                            <pre style={{lineHeight: '25px'}}>Username: editor     Password: 123456</pre>
                            <pre style={{lineHeight: '25px'}}>Username: animate    Password: 123456</pre>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,mapDispatchToProps
)(Form.create()(Login))