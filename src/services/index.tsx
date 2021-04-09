import { request } from 'umi';

const API_URL = process.env.API_URL;

export const getData = (params: object) => {
  return request(`${API_URL}/api/list`, {
    method: 'get',
    params,
  });
};
