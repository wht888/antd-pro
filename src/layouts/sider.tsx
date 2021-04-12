import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { history } from 'umi';

export default () => {
  const [pathname, setPathname] = useState('/welcome');

  const menuData = {
    route: {
      path: '/',
      routes: [
        {
          path: '/welcome',
          name: '欢迎',
          icon: <SmileOutlined />,
        },
        {
          path: '/case',
          name: '管理页',
          icon: <CrownOutlined />,
          access: 'canAdmin',
          routes: [
            {
              path: '/case/list',
              name: '一级页面',
              icon: <CrownOutlined />,
            },
            {
              path: '/admin/sub-page2',
              name: '二级页面',
              icon: <CrownOutlined />,
            },
            {
              path: '/admin/sub-page3',
              name: '三级页面',
              icon: <CrownOutlined />,
            },
          ],
        },
        {
          name: '列表页',
          icon: <TabletOutlined />,
          path: '/list',
          component: './ListTableList',
          routes: [
            {
              path: '/list/sub-page',
              name: '一级列表页面',
              icon: <CrownOutlined />,
              routes: [
                {
                  path: 'sub-sub-page1',
                  name: '一一级列表页面',
                  icon: <CrownOutlined />,
                },
                {
                  path: 'sub-sub-page2',
                  name: '一二级列表页面',
                  icon: <CrownOutlined />,
                },
                {
                  path: 'sub-sub-page3',
                  name: '一三级列表页面',
                  icon: <CrownOutlined />,
                },
              ],
            },
            {
              path: '/list/sub-page2',
              name: '二级列表页面',
              icon: <CrownOutlined />,
            },
            {
              path: '/list/sub-page3',
              name: '三级列表页面',
              icon: <CrownOutlined />,
            },
          ],
        },
        {
          path: 'https://ant.design',
          name: 'Ant Design 官网外链',
          icon: <AntDesignOutlined />,
        },
      ],
    },
    location: {
      pathname,
    },
  };
  return {
    ...menuData,
    logo: require('@/assets/logo.svg'),
    title: '系统',
    menuItemRender: (item: any, dom: any) => (
      <a
        onClick={() => {
          setPathname(item.path || '/');
          history.push(item.path || '/');
        }}
      >
        {dom}
      </a>
    ),
  };
};
