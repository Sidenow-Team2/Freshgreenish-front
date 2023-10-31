import axios from 'axios';

const token = 'YOUR_ACCESS_TOKEN'; // 토큰을 여기에 추가

const api = axios.create({
  baseURL: 'https://your-api-url.com',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

// 서버로 GET 요청 보내기
api.get('/api/data')
  .then(response => {
    // 서버에서 받은 데이터 처리
  })
  .catch(error => {
    // 에러 처리
  });