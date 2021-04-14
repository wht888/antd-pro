import ProLayout from '@ant-design/pro-layout';
import { useEffect, useState } from 'react';
import Header from './Header';
import { history, useModel } from 'umi';
import { menuFormat } from '@/utils';
import { SmileOutlined } from '@ant-design/icons';

const Layout: React.FC = (props) => {
  const { initialState } = useModel('@@initialState');

  const [routes, setRoutes]: any[] = useState([
    { name: '列表', path: '/case/list' },
    { name: '表单', path: '/case/form' },
    { name: '详情', path: '/case/detail' },
  ]);

  const { children } = props;

  const [pathname, setPathname] = useState('/');

  // useEffect(() => {
  //   const menus: any[] = menuFormat(initialState?.currentUser?.menus).map(
  //     (item) => {
  //       const childs = item.children.map((item2: any) => {
  //         return { name: item2.name, path: item2.path };
  //       });
  //       return {
  //         name: item.name,
  //         path: item.path || '/',
  //         icon: item.icon ? <SmileOutlined /> : '',
  //         children: childs,
  //       };
  //     },
  //   );

  //   setRoutes(menus);
  // }, []);

  return (
    <div style={{ height: '100vh' }}>
      {routes.length && (
        <ProLayout
          title="系统"
          logo={require('@/assets/logo.svg')}
          rightContentRender={Header}
          route={{
            routes,
          }}
          location={{ pathname }}
          menuItemRender={(item, dom) => (
            <a
              onClick={() => {
                history.push(item.path || '/');
                setPathname(item.path || '/');
              }}
            >
              {dom}
            </a>
          )}
        >
          {children}
        </ProLayout>
      )}
    </div>
  );
};

export default Layout;
