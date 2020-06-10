import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.86.179:9000/api',
});

export default apiClient;
