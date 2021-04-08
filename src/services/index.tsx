import { request } from 'umi';

export const getData = (params: object) => {
  return request('/api/list', {
    method: 'get',
    params,
  });
};
