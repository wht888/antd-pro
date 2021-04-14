import { Avatar, Dropdown, Menu } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useModel, history } from 'umi';

import styles from './index.less';

export default () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const loginOut = () => {
    setInitialState({
      ...initialState,
      currentUser: null,
    });
    window.localStorage.setItem('token', '');
    history.replace('/user/login');
  };

  const settings = () => {
    history.push('/user/settings');
  };

  const menuHeaderDropdown = (
    <Menu>
      <Menu.Item onClick={settings}>
        <SettingOutlined />
        个人设置
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item onClick={loginOut}>
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menuHeaderDropdown}>
        <span className={styles.account}>
          <Avatar
            size={24}
            icon={<UserOutlined />}
            style={{ marginRight: 8 }}
          />
          <span>{initialState?.currentUser?.user.userName}</span>
        </span>
      </Dropdown>
    </div>
  );
};
