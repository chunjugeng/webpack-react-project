import * as mobx from 'mobx';
import {observable, action, runInAction, computed} from 'mobx';
import api from '~/services/Api';

mobx.configure({enforceActions: true});
const phoneRex = /^(13|15|17|18)\d{9}$/
export default new class Reg {
    @observable 
    app = {
        phone: '',
        pwd: '1212wq',
        smsCode: '',
        isAcceptAgreement: false,
        error: '',
        isDisabledValidCode: false,
        gtNeeded: false,
        gtPassed: false,
        gt: null,
        ready: false
    }
    constructor() {
        this.update(this.app);
    }

    @action
    update =(app)=> {
        Object.assign(this.app, app);
    }

    @computed
	get isPhoneValid() {
        return this.app.phone;
    };

    @action 
    onUIChange = e => {
        const target = e.target;
        const isBoolean = target.type === 'checkbox' || target.type === 'radio';
        const value = isBoolean ? target.checked : target.value;
        this.app[target.name] = value;
    };
    
    @action 
    checkPhone = e => {
        return phoneRex.test(this.app.phone) ? true : false;
    }

    @action 
    onChange =() => {
        const target = e.target;
        const isBoolean = target.type === 'checkbox' || target.type === 'radio';
        const value = isBoolean ? target.checked : target.value;
        this.app[target.name] = name;
    }

    showGt =(loadGt, gtObj) => {
        let self = this;
        if (this.app.gtPassed) {
            this.fetchVerifyCode(gtObj, self.app.gtPassed);
            return;
        }
        //验证手机
        if (!this.checkPhone()) {
            runInAction(()=> {
                this.app.error = '请输入正确的手机格式！';
                return;
            });
            this.showError();
            return;
        }
        runInAction(()=> {
            this.app.gtNeeded = true;
            if (loadGt) {
                loadGt();
            }
        });
        
    }

    @computed 
    get needShowGt() {
        return this.app.gtNeeded && !this.app.gtPassed;
    }

    @action 
    updateGtState =(gtPassed)=> {
        runInAction(()=> {
          this.app.gtPassed = gtPassed;
          this.app.ready = gtPassed; 
          
        });
    }
    fetchVerifyCode = (gtObj, gtPassed)=> {
        this.updateGtState(gtPassed);
        if (gtPassed) {
            let gt = gtObj.getValidate();
            runInAction(()=> {
                this.app.gt = gt;
            });
            return api.fetchVerifyCode({
                verifyCodeChannel: 'SMS',
                cellphone: this.app.phone,
                geetype: 'APP',
                geechallenge: gt.geetest_challenge,
                geevalidate: gt.geetest_validate,
                geeseccode: gt.geetest_seccode, 
            }).then((res)=> {
                if (res.data.result.toLowerCase() === 'error') {
                    runInAction(()=> {
                        this.app.error = res.data.errors[0];
                        this.showError();
                    });
                }  
            });   
        } 
    }

    @action 
    showError =() =>{
        setTimeout(()=>  {
            runInAction(()=> {
                this.app.error = '';
            });
        }, 1000);
    }

    @computed 
    get needRegBtnDisabled() {
        return !this.app.phone || !this.app.pwd || !this.app.smsCode || this.app.error || !this.app.isAcceptAgreement;
    }

    create=(e)=> {
        e.preventDefault();
        let gt = this.app.gt;
        let params = {
            regPhone: this.app.phone,
            regPhoneResponseCode: this.app.smsCode,
            regPassword: this.app.pwd,
            regPasswordConfirm: this.app.pwd,
            // referralName: urlParams.referralName || urlParams.referredBy || '',
            // activityId: urlParams.activityId || '',
            geechallenge: gt.geetest_challenge,
            geevalidate: gt.geetest_validate,
            geeseccode: gt.geetest_seccode,
            geetype: 'WEB',
            acceptAgreement: 'on',
            // clientSourceType: 'MARKET_LANDING_PAGE',
            // clientSourceType: cst
        };
        api.create(params).then((res)=> {
            if (res.data.result.toLowerCase() === 'error') {
                runInAction(()=> {
                    this.app.error = res.data.errors[0];
                    this.showError();
                });
            }
        });
    }
}()