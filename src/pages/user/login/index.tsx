import { Helmet, Link } from 'umi';
import styles from './index.less';
import { Tabs } from 'antd';

import UserForm from './components/userForm';
import DingForm from './components/DingForm';

const { TabPane } = Tabs;

export default () => {
  return (
    <div>
      <Helmet>
        <title>登录</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img
                  alt="logo"
                  className={styles.logo}
                  src={require('@/assets/logo.svg')}
                />
                <span className={styles.title}>Ant Design</span>
              </Link>
            </div>
            <div className={styles.desc}>
              Ant Design 是西湖区最具影响力的 Web 设计规范
            </div>
          </div>

          <div className={styles.main}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="账户密码登录" key="1">
                <UserForm />
              </TabPane>
              <TabPane tab="钉钉扫码登录" key="2">
                <DingForm />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
