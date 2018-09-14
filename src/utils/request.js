import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    transformRequest: [function(params) {
        params = qs.stringify(params);
        return params;
    }], 
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
export default instance;