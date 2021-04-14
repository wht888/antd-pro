import { useEffect } from 'react';
import { useModel, history } from 'umi';
import Layout from './Layout';

export default function (props: any) {
  const loginPath = '/user/login';

  const { initialState } = useModel('@@initialState');

  useEffect(() => {
    const { location } = history;
    // 如果没有登录，重定向到 login
    if (!initialState?.currentUser && location.pathname !== loginPath) {
      history.push(loginPath);
    }
  });

  if (props.location.pathname === loginPath) {
    return <div>{props.children}</div>;
  }

  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  );
}
