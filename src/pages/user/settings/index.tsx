import { Form, Input, Button, Card } from 'antd';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 6 },
};

const tailLayout = {
  wrapperCol: { offset: 2, span: 6 },
};

export default () => {
  const onFinish = () => {};

  return (
    <Card title="个人设置">
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item
          label="员工姓名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="身份证号码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="手机号码"
          name="phone"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
