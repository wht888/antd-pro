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
