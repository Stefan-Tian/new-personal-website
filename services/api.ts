import axios from 'axios';

const API = process.env.API_ENDPOINT;

const instance = axios.create({
  baseURL: API,
  withCredentials: true,
});

const api = <T, U extends {}>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data: T | {} = {}
) => {
  switch (method) {
    case 'get':
      return instance.get<U>(url, { params: data });
    case 'post':
      return instance.post<U>(url, data);
    case 'put':
      return instance.put<U>(url, data);
    case 'delete':
      return instance.delete<U>(url, { params: data });
    default:
      throw new Error('Invalid method provided!');
  }
};

export default api;
