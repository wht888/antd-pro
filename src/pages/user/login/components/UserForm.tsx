import { Form, Input, Checkbox, Button, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { loginIn } from '../service';
import styles from '../index.less';
import { useModel, history } from 'umi';

export default () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');

  const onFinish = async (values: any) => {
    setSubmitLoading(true);

    const params = {
      loginName: values.username,
      password: values.password,
      systemCode: 'LBS',
      platformCode: 'pc',
      needVerifyCode: false,
    };

    const res = await loginIn(params);

    setSubmitLoading(false);

    if (res.success) {
      message.success('登录成功！');
      console.log(res);
      window.localStorage.setItem('token', res.data.token.accessToken.token);
      await fetchUserInfo();
      goto();
    } else {
      message.error(res.msg);
    }
  };

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      setInitialState({
        ...initialState,
        currentUser: userInfo,
      });
    }
  };

  const goto = () => {
    if (!history) return;
    setTimeout(() => {
      const { query } = history.location;
      const { redirect } = query as { redirect: string };
      history.push(redirect || '/');
    }, 10);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size="large"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input
          placeholder="请输入用户名"
          allowClear
          prefix={<UserOutlined className={styles.prefixIcon} />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
      >
        <Input.Password
          placeholder="请输入密码"
          allowClear
          prefix={<LockOutlined className={styles.prefixIcon} />}
        />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>自动登录</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
          loading={submitLoading}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
