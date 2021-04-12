import { request } from 'umi';

export const getData = (params: object) => {
  return request(`${API_URL}/api/list`, {
    method: 'get',
    params,
  });
};
