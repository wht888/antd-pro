import request from 'umi-request';

export const loginIn = (data: object) => {
  return request(`${API_URL}/auth/unifiedlogin`, {
    method: 'POST',
    data,
  });
};

export const getScanConfig = (params: object) => {
  return request(`${API_URL}/legal/LoginCheck/GetScanConfig`, {
    method: 'get',
    params,
  });
};

export const getLoginInfo = () => {
  return request(`${API_URL}/settings/User/GetLoginInfo`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}` || '',
    },
  });
};
