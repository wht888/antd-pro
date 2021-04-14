import { useEffect, useState } from 'react';
import { getScanConfig, loginIn } from '../service';
import { message } from 'antd';
import { history, useModel } from 'umi';

export default () => {
  const [DDOBJ, setDDOBJ] = useState({ redirectUri: '', appid: '' });
  const { initialState, setInitialState } = useModel('@@initialState');

  const { query = {} } = history.location;
  const { code } = query;
  useEffect(() => {
    if (code) {
      loginByCode(code);
    } else {
      getLoginInfo();
    }
  }, []);

  const loginByCode = async (DingCode: any) => {
    const res = await loginIn({
      SystemCode: 'LBS',
      PlatformCode: 'PC',
      DingCode,
      LoginType: 2,
    });
    if (res.success) {
      if (res.data && res.data.userInfo && res.data.userInfo.length > 1) {
        message.error('法务系统暂不支持多账户登录，如有疑问，请联系管理员。');
        history.replace('/user/login');
        getLoginInfo();
      } else {
        message.success('登录成功');
        await fetchUserInfo();
        goto();
      }
    } else {
      message.error(res.msg);
      history.replace('/user/login');
      getLoginInfo();
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

  const getLoginInfo = async () => {
    let res = await getScanConfig({});
    console.log(res);
    if (res.success) {
      setDDOBJ({
        redirectUri: res.data.lmsUrl,
        appid: res.data.appId,
      });
      ddLogin();
      addHandle();
    } else {
      message.error(res.msg);
    }
  };

  const ddLogin = () => {
    let redirect = encodeURIComponent(DDOBJ.redirectUri);
    let goto = encodeURIComponent(
      `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${DDOBJ.appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${redirect}`,
    );
    // eslint-disable-next-line no-undef
    DDLogin({
      id: 'login_container',
      goto,
      style: 'border:none;background-color:#FFFFFF;',
      width: '300',
      height: '300',
    });
  };

  const addHandle = () => {
    if (typeof window.addEventListener != 'undefined') {
      window.addEventListener('message', handleMessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
      window.attachEvent('onmessage', handleMessage);
    }
  };

  const handleMessage = (event: any) => {
    const origin = event.origin;
    if (origin == 'https://login.dingtalk.com') {
      const loginTmpCode = event.data;
      const url = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${DDOBJ.appid}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=redirect_uri&loginTmpCode=${loginTmpCode}`;
      location.href = url;
    }
  };

  return <div id="login_container"></div>;
};
