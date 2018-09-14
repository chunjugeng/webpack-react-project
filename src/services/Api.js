import axios from 'axios';
import request from '~/utils/request';
import pkg from '../../package.json';
let SSOEndpoint = pkg.proxy['/auth-server'].target;

class Api {
    gtInit() {
        return axios.get('/api/v2/captcha/init');
    }
    fetchVerifyCode(params) {
        return request.post('/api/v2/users/fetchverifycode4register', params);
    }
    
    create(params) {
        return request.post('/api/v2/users/create', params).then((res)=> {
            if (res && res.data.result.toLowerCase() === 'success') {
                var data = {
                    identity : params.regPhone,
                    password : params.regPassword,
                    encryptedParam : 'password',
                    service : 'https://auth-demo.dianrong.com/api/v2/j_spring_cas_security_check'
                };
                return request.post('/auth-server/api/users/login/pwd', data);
            }
        });
    }
}

export default new Api;
