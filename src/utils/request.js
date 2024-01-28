import axios from "axios";

const httpInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 5000
});

export default httpInstance